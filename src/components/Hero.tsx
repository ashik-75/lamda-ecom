import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="p-5 relative h-[400px] md:h-[700px] w-[100%]">
      <img
        src="https://images.unsplash.com/photo-1560243562-f480284a881f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1900&q=60"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="bg-gray-900/40 absolute h-full w-full inset-0 overflow-hidden"></div>
      <div className=" absolute z-20 inset-0 flex flex-col items-center space-y-4 justify-center">
        <h1 className="text-white font-extrabold text-4xl md:text-7xl">
          Modern Shopping
        </h1>
        <p className="text-white text-xl md:text-2xl tracking-widest">
          FOR A WAY TO LOOKS BETTER
        </p>

        <Link
          to={"/collections/all"}
          className="font-bold text-white hover:bg-white hover:text-black border-2 sm:text-lg transition-all sm:px-6 border-white px-4 py-1.5"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
