import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen text-white bg-black flex flex-col justify-center items-center">
      <div className="w-full h-44 flex flex-col items-center justify-around">
        <h1 className="text-5xl">Resumer</h1>
        <p>Create your resumes seamlessly</p>
        <Link to="/signup">
          <button className="w-32 h-10 border-2 text-white border-white cursor-pointer outline-none rounded-sm hover:bg-white hover:text-black">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
