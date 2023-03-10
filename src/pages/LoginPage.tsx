import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5">
        {isLoading ? (
          <div className="p-5 max-w-md bg-gray-50 rounded-lg space-y-2">
            <div className="bg-gray-200 h-5 rounded-xl w-[50%]"></div>
            <div className="bg-gray-200 h-5 rounded-xl"></div>
            <div className="bg-gray-200 h-5 rounded-xl"></div>
          </div>
        ) : !isAuthenticated ? (
          <div className="space-y-4 p-5 max-w-md border border-gray-200 rounded">
            <h1 className="font-medium">
              You Are not logged in yet, want to Login?
            </h1>
            <button
              className="px-4 py-1 rounded border font-medium"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
        ) : (
          <div className="flex gap-5 max-w-md p-5 border border-gray-200 rounded-lg">
            <div className="h-20 w-20">
              <img
                src={user?.picture}
                className=" h-full w-full rounded-full object-cover object-center"
                alt=""
              />
            </div>

            <div>
              <h2 className="font-bold">{user?.name}</h2>
              <p>{user?.email}</p>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="bg-rose-700 rounded mt-2 px-4 py-1 text-white font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
