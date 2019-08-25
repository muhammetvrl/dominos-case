import React from "react";
import OrderPizza from "../components/OrderPizza";
class Order extends React.Component {
  render() {
    const pizzas = this.props.Pizzas;
    var total = 0;

    return (
      <section style={{ minHeight: "500px" }}>
        <div className="pizzas">
          <p>Sepet</p>
          <div className="orders">
            {pizzas.map((value, index) => {
              total = total + value.price;

              return (
                <OrderPizza
                  key={index}
                  value={value}
                  deleteToPizza={this.props.deleteToPizza}
                />
              );
            })}
            <hr />
            <div className="total">
              <span>Toplam</span>
              <span>
                {total}
                TL
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Order;
