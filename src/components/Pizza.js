import React from "react";
import pizza from "../assets/img/pizza.png";
class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    };
  }
  addToCartPizza(pizza) {
    this.setState(function() {
      this.props.addToCartPizza(pizza);
    });
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false
          });
        }, 3500);
      }
    );
  }

  render() {
    const { pizzaProduct } = this.props;
    return (
      <div className="pizza">
        <div className="pizza-header">
          <img src={pizza} alt="" />
        </div>
        <div className="pizza-footer">
          <h3 className="pizza-title">{pizzaProduct.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt
            quisquam temporibus modi quos minus
          </p>
          <div className="price">
            <span>
              {pizzaProduct.price}
              <span style={{ marginLeft: "7px" }}>TL</span>
            </span>

            <button
              className={!this.state.isAdded ? "" : "added"}
              onClick={() =>
                this.addToCartPizza({
                  title: pizzaProduct.title,
                  price: pizzaProduct.price
                })
              }
            >
              {!this.state.isAdded ? "Sepete Ekle" : "✔ Sepete Eklendi"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Pizza;
