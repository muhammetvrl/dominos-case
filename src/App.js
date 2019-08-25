import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Order from "./pages/Order";
import Home from "./pages/Home";
class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      total: ""
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.handlePizzas = this.handlePizzas.bind(this);
    this.deleteToPizza = this.deleteToPizza.bind(this);
  }
  //Delete Pizza
  deleteToPizza(title) {
    console.log(title);
    let deletePizza = this.state.products;
    deletePizza = deletePizza.filter(pizza => pizza.title !== title);
    this.setState({ products: deletePizza });

    setTimeout(() => {
      this.sumTotalItems(this.state.products.length);
    }, 100);
  }
  //Total
  sumTotalItems(count) {
    this.setState({
      total: count
    });
  }
  // Add to Cart
  handleAddToCart(selectedPizza) {
    this.state.products.push(selectedPizza);
    setTimeout(() => {
      this.sumTotalItems(this.state.products.length);
    }, 500);
  }

  handlePizzas() {
    let pizzas = this.state.products;
    return pizzas;
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header totalPizza={this.state.total} />
          <Route
            exact
            path="/"
            component={() => <Home handleAddPizza={this.handleAddToCart} />}
          />
          <Route
            exact
            path="/order"
            component={() => (
              <Order
                Pizzas={this.state.products}
                deleteToPizza={this.deleteToPizza}
              />
            )}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
