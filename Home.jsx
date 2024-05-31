import React from "react";
import showImage from './showimage.png';
import shoeone from './shoeone.png';
import shoetwo from './shoetwo.png';
import shoethree from './shoethree.png';
import './home.css';

function Home() {
  return (
    <div className="container">
      <div className="box1">
        <img src={showImage} alt="sho" />
      </div>
      
      <div className="box2">
        <h5>woMan’s shoes</h5>
        <h1 className="heading">Nike Air Max 90 LV8 SE</h1>
        <h5>$160</h5>
        <p className="para">
          The Air Max 90 LV8 SE takes your favourite silhouette to the next
          level with stacked Nike Air units. Not only do you get extra
          cushioning, but you get extra height, creating the perfect platform
          that's easy to style.
        </p>
        <div className="showcase">
          <img src={shoeone} alt="sho1" />
          <img src={shoetwo} alt="sho2" />
          <img src={shoethree} alt="sho3" />
        </div>
        <h5 className="selectsize">SELECT SIZE</h5>
        <div className="button_cart">
          <button>us 8.5</button>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
