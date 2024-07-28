import React from "react";
import "./Hero.css";
import iphone from "../assets/iphone.png";
import logo from "../assets/logo.png";
import herovideo from "../assets/herovideo.mp4";

function Hero() {
  return (
    <main className="lg:h-custom-700 h-custom-1100">
      <div className="map-image"></div>
      <div className="red_color"></div>

      <div className="hero flex flex-col lg:flex-row px-5 lg:px-20 justify-center items-center">
        
        
        <div className="iphone-div mt-20 lg:mt-10">
          <video className="iphone-video " autoPlay muted loop>
            <source src={herovideo} type="video/mp4" />
          </video>

          <img src={iphone} alt="iPhone" className="iphone-image" />
        </div>

        <div className="second-div text-white lg:w-96 h-full mt-20 text-center">
          <img
            className="h-8 w-20 mx-auto lg:mx-0 md-start"
            src={logo}
            alt="Logo"
          />
          <h1 className="text-2xl lg:text-3xl font-bold mt-4 text-start">
            Welcome to Foodie
          </h1>
          <p className="mt-4 md:content-start">
            At foodie, we redefine convenience with our seamless food delivery
            service. Whether you're craving the flavors of home or exploring new
            culinary delights, foodie brings it all to your doorstep. From
            hearty breakfasts to gourmet dinners and everything in between, our
            curated menu caters to every palate and preference.
          </p>
          <button className="btn text-black bg-white px-6 py-2 rounded-3xl mt-8 font-bold mb-24">
            Join the Waitlist
          </button>
        </div>


      </div>
    </main>
  );
}

export default Hero;
