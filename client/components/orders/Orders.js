import React from 'react';
import {connect} from 'react-redux';
import { getOrders } from '../../store/orders';

class Orders extends React.Component {

  componentDidMount () {
    this.props.getOrders(this.props.user.id);
  }
  render () {
    const completed = this.props.orders.filter(order => order.status === 'COMPLETED')
    const processing = this.props.orders.filter(order => order.status === 'PROCESSING')

    return (
      <div>
        <div>
          <h1>Orders for: {this.props.user.email}</h1>
        </div>
        <div>
          <div>
            <h2>Processing Orders</h2>
            {processing.map(order => {
              return (
                <p key={order.id}>{order.status}</p>
              )
            })}
          </div>
          <div>
            <h2>Completed Orders</h2>
            {completed.map(order => {
              return (
                <p key={order.id}>{order.status}</p>
              )
            })}
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
