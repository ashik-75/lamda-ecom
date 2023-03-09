import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-5 h-[50vh] flex justify-center items-center">
      <div className="max-w-md mx-auto text-center space-y-2 md:space-y-5">
        <p className="text-blue-600 text-xl font-medium">404</p>
        <h1 className=" text-3xl md:text-5xl text-gray-800 font-extrabold">
          Page Not Found
        </h1>
        <p className="text-gray-600">
          Sorry, we couldn’t find the page you’re looking for
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

export default NotFoundPage;
