import React from "react";
import sepet from "../assets/img/sepet.png";
import { Link } from "react-router-dom";

class Order extends React.Component {
  state = {
    products: {}
  };

  render() {
    return (
      <Link to="/order">
        <button href="/order" className="order-box">
          <img src={sepet} alt="" />
          <span>{!this.props.productCount ? 0 : this.props.productCount}</span>
        </button>
      </Link>
    );
  }
}
export default Order;
