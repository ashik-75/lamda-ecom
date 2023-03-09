import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-5 h-[50vh] flex justify-center items-center">
      <div className="max-w-md md:max-w-xl mx-auto text-center space-y-2 md:space-y-5">
        <h1 className=" text-3xl md:text-5xl text-green-800 font-extrabold">
          Order Received, thanks
        </h1>
        <p className="text-gray-600">
          if you have any question then feel free to ask me
        </p>

        <button
          className="bg-blue-600 px-4 py-2 rounded text-white font-bold hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
