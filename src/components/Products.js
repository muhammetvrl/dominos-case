import React from "react";
import Pizza from "./Pizza";
class Products extends React.Component {
  render() {
    const pizzas = [
      {
        title: "pizza 1",
        price: 25
      },
      {
        title: "pizza 2",
        price: 25
      },
      {
        title: "pizza 3",
        price: 25
      },
      {
        title: "pizza 4",
        price: 25
      },
      {
        title: "pizza 5",
        price: 25
      },
      {
        title: "pizza 6",
        price: 25
      }
    ];

    return (
      <section>
        <div className="pizzas">
          <p>Pizzalar</p>
          <div className="pizza-card-wrapper">
            {pizzas.map((value, index) => {
              return (
                <Pizza
                  key={index}
                  addToCartPizza={this.props.addToCart}
                  pizzaProduct={value}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Products;
