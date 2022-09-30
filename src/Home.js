import { Link } from "react-router-dom";
import homeImage from "./assets/home_image.svg";
import homeImage2 from "./assets/home_image.jpg";

import Template1 from "./templates/template1.jpg";

function Home() {
  return (
    <div
      style={{
        background: "#0f0c29",
        background:
          "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
      className="w-full h-screen text-black flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="w-full flex justify-center items-center lg:w-1/2 h-full flex-col lg:items-start lg:justify-start">
        <div className="flex items-center lg:w-auto h-auto text-white lg:mx-10 lg:my-20 flex-col justify-center lg:items-start">
          <h1 className="text-7xl font-extrabold tracking-wider">Rezoom</h1>
          <p className="text-2xl">Simple. Clear. Strong</p>
          <Link to="/signin">
            <button className="w-32 h-10 my-2 bg-green-500 text-white font-light cursor-pointer outline-none rounded-sm hover:bg-green-600">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-center items-end">
        <img className="w-11/12 h-auto rounded-md" src={homeImage} />
      </div>
    </div>
  );
}

export default Home;
