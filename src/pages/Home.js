import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Products addToCart={this.props.handleAddPizza}/>
      </div>
    );
  }
}
export default Home;
