import React from "react";
import hero from "../assets/img/hero.png";
class Hero extends React.Component {
  render() {
    return (
      <section>
        <div className="hero">
          <img src={hero} alt="" />
        </div>
      </section>
    );
  }
}
export default Hero;
