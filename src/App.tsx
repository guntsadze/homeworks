import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="qrCardContainer">
        <img src={"/assets/image-qr-code.png"} alt="qrImg" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
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
        <img src={"assets/image-equilibrium.jpg"} />
      </div>
    </div>
  );
}

export default App;
