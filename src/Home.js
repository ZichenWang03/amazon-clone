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
            rating={4}
          />
          <Product
            id="26313126"
            title="Just DON 76ERS SHORTS"
            price={99.9}
            image="https://cdn.shopify.com/s/files/1/0626/9065/products/SHORBW18015-P76BLCK.jpg?v=1609261974"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1342345"
            title="FEAR OF GOD Grey Nylon Track Shorts"
            price={99.9}
            image="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211782M193102_1/fear-of-god-grey-nylon-track-shorts.jpg"
            rating={5}
          />
          <Product
            id="1342345"
            title="FEAR OF GOD Green Nylon Track Shorts"
            price={199.9}
            image="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211782M193101_1/fear-of-god-green-nylon-track-shorts.jpg"
            rating={5}
          />
          <Product
            id="1342345"
            title="FEAR OF GOD Black Nylon Track Shorts"
            price={69.9}
            image="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211782M193103_1/fear-of-god-black-nylon-track-shorts.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
