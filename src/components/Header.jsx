import React from "react";
import { Link } from "react-router-dom";
// import farmersImage from "../assets/images/farmers.jpeg";

function Header() {
  return (
    <div>
      <style jsx>
        {`
        div {
          margin-bottom: 20px;
        }
          h1 {
            text-align: center;
            text-shadow: 2px 2px #cccccc;
          }
          img {
            max-width: 100%;
            height: auto;
          }

          button {
            color: white;
            background-color: darkgrey;
            font-size: 1rem;
            font-weight: bold;
            width: 150px;
            height: 50px;
            margin:auto;
            border-radius:10%;
            border: 2px solid black;
          }
        `}
      </style>
      {/* <img src={farmersImage} /> */}
      <h1>Historical Figures</h1>
      <Link to="/"><button>Home</button></Link> |{" "}
      <Link to="/historicalfigures"><button>Figures</button></Link>
    </div>
  );
}

export default Header;
