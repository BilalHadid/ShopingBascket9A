import React from "react";
import Header from "./Header";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div style={{ marginTop: "25px" }}>
        <Header />
      </div>
      <div className="MainWord" style={{ fontFamily: "serif" }}>
        <p># New Collection 2020</p>
        <h1>
          Tranding Stylish shoes <br /> for Men !!
        </h1>

        <button
          style={{
            padding: "5px",
            fontSize: "20px",
          }}
          className="ButtonMain"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Main;
