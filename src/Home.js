import { Link } from "react-router-dom";
import homeImage from "./assets/home_image.svg";
import homeImage2 from "./assets/home_image.jpg";
import home_image from "./assets/home_image.png";

function Home() {
  return (
    <div
      style={{
        background: "#0f0c29",
        background:
          "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
      className="w-full h-screen text-white flex flex-col lg:flex-col"
    >
      <div className="w-full h-32 flex items-center">
        <h4 className="text-3xl font-semibold font-pop ml-32">Resumer</h4>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h4 className="text-6xl font-bold font-pop text-center mt-5 mx-2">
          A Powerful <br></br> Resume Builder Tool
        </h4>
        <p className="text-2xl mt-3 mx-2 text-center">
          Land your next dream job with an amazing resume.
        </p>

        <div className="w-20 h-10 bg-indigo-600	rounded mt-5">
          <Link to="/signin">
            <button className="w-full h-full bg-transparent rounded">
              Sign In
            </button>
          </Link>
        </div>

        <img
          className="w-11/12 lg:w-1/2 rounded-md mt-5"
          src={home_image}
          alt={homeImage2}
        />
      </div>
    </div>
  );
}

export default Home;
