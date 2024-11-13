import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./custom.scss";
import "bootstrap";
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { GamesApiContextProvider } from './api-context/GamesApiContextProvider.tsx';

const uri = import.meta.env.VITE_REDIRECT_URI;

if (!uri) console.log("VITE_REDIRECT_URI is not set");
else console.log("VITE_REDIRECT_URI is: " + { uri });

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "cort-id",
  redirect_uri: `${uri}`,
  // ...
  onSigninCallback: async (user) => {
    console.log("called back!");
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);
    document.cookie = `jwt_token=${user?.id_token}`;
  },
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <ErrorBoundary fallback={<div>Something went wrong</div>}> */}
      <AuthProvider {...oidcConfig}>
      <GamesApiContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
        </GamesApiContextProvider>
      </AuthProvider>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
)
