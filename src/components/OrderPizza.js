import React from "react";
import trash from "../assets/img/delete.png";

class OrderPizza extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  onDeleteClick(title, e) {
    const { deleteToPizza } = this.props;
    deleteToPizza(title);
  }
  render() {
    const { title, price } = this.props.value;
    return (
      <div className="pizza">
        <span>{title}</span>
        <span>{price} TL</span>
        <button onClick={this.onDeleteClick.bind(this, title)}>
          <img src={trash} alt="" />
        </button>
      </div>
    );
  }
}
export default OrderPizza;
