import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Order from "./Order";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          <Order
            productCount={this.props.totalPizza}
         />
        </div>
      </header>
    );
  }
}
export default Header;
