function Hero() {
  return (
    <div className="p-5 relative h-[400px] md:h-[700px] w-[100%]">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="bg-gray-900/60 absolute h-full w-full inset-0 overflow-hidden"></div>
      <div className=" absolute z-20 inset-0 flex flex-col items-center space-y-4 justify-center">
        <h1 className="text-white font-extrabold text-4xl md:text-7xl">
          Modern Furniture
        </h1>
        <p className="text-white text-xl md:text-2xl tracking-widest">
          FOR A BETTER WAY TO WORK
        </p>

        <button className="font-bold text-white hover:bg-white hover:text-black border-2 sm:text-lg transition-all sm:px-6 border-white px-4 py-1.5">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
