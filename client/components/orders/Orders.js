import React from 'react';
import {connect} from 'react-redux';

const Orders = (props) => {
  return (
    <div>
      <div>
        <h1>Orders Page for: {props.userEmail}</h1>
      </div>
      <div>
        <div>
          <h1>Pending Orders</h1>
        </div>
        <div>
          <h1>Past Orders</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.user.email
  };
};

export default connect(mapStateToProps, null)(Orders);
