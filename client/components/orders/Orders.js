import React from 'react';
import {connect} from 'react-redux';
import {getOrders} from '../../store/orders';

class Orders extends React.Component {

  componentDidMount () {
    this.props.getOrders(this.props.user.id);
  }

  // componentDidUpdate (prevProps) {
  //   if (prevProps.orders !== this.props.orders) {
  //     this.props.getOrders(this.props.user.id);
  //   }
  // }

  renderOrders (orders) {
    return !orders.length ? (
      <h1>Loading...</h1>
    ) : orders.map(order => {
      return (
        <div key={order.id} className='order-product-list'>
          <div className='order-header-container'>
            <h2>Order sumbitted on: {order.updatedAt.slice(0, 10)}</h2>
            <h3>Total Price: {`$${order.total}`}</h3>
          </div>
          {
            order.products.map(product => {
              return (
                <div key={product.id} className='order-product-container' onClick={() => history.push(`/products/${product.id}`)}>
                  <div className='order-product-image'>
                    <img src={product.imageURL} alt="test" />
                  </div>
                  <div className="order-product-info">
                    <h4>{product.title}</h4>
                    <p className="bgcolor-darkestslateblue">{`$${product.price}`}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      );
    });
  }

  render () {
    const {orders, user} = this.props;
    const {renderOrders} = this;
    const completed = orders.filter(order => order.status === 'COMPLETED')
    const processing = orders.filter(order => order.status === 'PROCESSING')

    return (
      <div>
        <div>
          <h1>Orders for: {user.email}</h1>
        </div>
        <div>
          <div>
            <h2>Processing Orders</h2>
            {
              renderOrders(processing)
            }
          </div>
          <div>
            <h2>Completed Orders</h2>
            {
              renderOrders(completed)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    orders: state.orders || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: (userId) => {dispatch(getOrders(userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
