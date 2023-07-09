import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/appContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  const navigate = useNavigate();

  const { user, signOut } = useApp();

  return (
    <div
      className="w-100 h-16 font-inter text-white"
      style={{
        background: "#0f0c29",
        background:
          "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
    >
      <nav className="w-100 h-full flex flex-row justify-between items-center">
        <div className="w-auto h-full flex items-center">
          <h1 className="text-2xl font-bold font-inter text-gray mx-10 tracking-wide">
            Rezoom
          </h1>
        </div>
        <ul className="hidden h-full md:flex w-1/2 justify-around items-center lg:w-1/3">
          <li className="text-gray cursor-pointer"></li>
          <Link to="/dashboard">
            <li className="text-gray cursor-pointer">Dashboard</li>
          </Link>
          <li className="text-gray">
            <button className="w-44 h-8 rounded-sm text-white bg-blue-500 hover:bg-blue-600 transition-all">
              Sign in
            </button>
          </li>
          <li>
            <button
              onClick={async () => {
                await signOut();
                // navigate("/");
              }}
              className="w-20 h-8 rounded-sm text-white bg-blue-500 hover:bg-blue-600 transition-all"
            >
              Log out
            </button>
          </li>
        </ul>
        <div
          className="w-auto mx-5 md:hidden"
          onClick={() => {
            handleOpen();
          }}
        >
          {openMenu ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiMenu className="w-5 h-5" />
          )}
        </div>
        {openMenu ? (
          <div
            className="w-full h-32 absolute top-16 z-10 transition delay-100"
            style={{
              background: "#0f0c29",
              background:
                "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
              background:
                "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
            }}
          >
            <ul className="h-full flex flex-col justify-around items-center md:hidden lg:hidden">
              <Link to="/dashboard">
                <li className="text-gray cursor-pointer">Dashboard</li>
              </Link>
              <li>
                <button
                  onClick={async () => {
                    await signOut();
                  }}
                  className="w-20 h-8 rounded-sm text-white bg-blue-500 hover:bg-blue-600 transition-all"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
