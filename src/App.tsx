import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="page-1">
        <div className="qrCardContainer">
          <img src={"/assets/image-qr-code.png"} alt="qrImg" />
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="page-2">
        <div className="ethCardContainer">
          <div className="eth-clock">
            <img src={"assets/icon-clock.svg"} />
            <span>3 days left</span>
            <div className="ethContainer">
              <img src={"assets/icon-ethereum.svg"} />
              <span>0.041 ETH</span>
            </div>
          </div>
          <h3>Our Equilibrium collection promotes balance and calm.</h3>
          <div className="rectangle"></div>
          <div className="profile">
            <img src={"assets/image-avatar.png"} />
            <div className="nameUsername">
              <span>Jules Wyvern</span>
              <span>Creation of </span>
            </div>
          </div>
          <h2>Equilibrium #3429</h2>
          <img className="mainImg" src={"assets/image-equilibrium.jpg"} />
          <div className="rectangle-copy"></div>
          <img className="eye" src={"assets/icon-view.svg"} />
        </div>
      </div>

      <div className="page-3">
        <div className="order-summary-component">
          <p className="cancel-btn">Cancel Order</p>
          <div className="payment-div">
            <p>Proceed to Payment</p>
            <div className="payment-rectangle"></div>
          </div>
          <div className="music-container">
            <div className="music-container-2">
              <img className="musicIcon" src={"assets/icon-music.svg"} />
              <p className="changeMusicP">Change</p>
              <div className="music-title">
                <p>$59.99/year</p>
                <p>Annual Plan</p>
              </div>
            </div>
            <div className="music-rectangle"></div>
          </div>
          <p className="mainPcomponent">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <h2>Order Summary</h2>
          <img className="musicBoy" src={"assets/illustration-hero.svg"} />
        </div>
        <img
          className="orderSIMG"
          src={"/assets/pattern-background-desktop.svg"}
        />
      </div>

      <div className="page-4">
        <div className="profile-card-container">
          <img className="card-background" src="assets/bg-pattern-card.svg" />
          <div className="card-information-div">
            <div className="social-status">
              <div className="likes">
                <p>Likes</p>
                <p>803K</p>
              </div>
              <div className="photos">
                <p>Photos</p>
                <p>1.4K</p>
              </div>
              <div className="followers">
                <p>Followers</p>
                <p>80K</p>
              </div>
            </div>
            <div className="rectangle-for-profile"></div>
            <p className="london">London</p>
            <div className="name-age">
              <span>26</span>
              <span>Victor Crest </span>
            </div>
            <img className="victor-img" src={"assets/image-victor.jpg"} />
          </div>
        </div>

        <div className="backgrounds">
          <img className="bg-top" src={"assets/bg-pattern-bottom.svg"} />
          <img className="bg-bottom" src={"assets/bg-pattern-top.svg"} />
        </div>
      </div>
    </div>
  );
}

export default App;
