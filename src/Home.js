import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/15/digital/video/Magellan_MLP/BRND_MTH21_00000_PVMagnetLeft_1440x675_Final_en-CA_PVD6656._SY1200_FMJPG_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="489524131"
            title="Fitness, cardio and more"
            price={54.99}
            image="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Galleries/10+Fitness+Tips/Muscle-confusion-is-the-only-way-to-go..jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
