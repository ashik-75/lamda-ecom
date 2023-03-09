import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default AuthProvider;
