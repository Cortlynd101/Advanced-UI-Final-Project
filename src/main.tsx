import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./custom.scss";
import "bootstrap";
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
import { MoviesApiContextProvider } from './api-context/MoviesApiContextProvider.tsx';
import { SnacksApiContextProvider } from './api-context/SnacksApiContextProvider.tsx';
import { TicketsApiContextProvider } from './api-context/TicketsApiContextProvider.tsx';
import { UsersApiContextProvider } from './api-context/UsersApiContextProvider.tsx';
import { ErrorBoundary } from 'react-error-boundary';

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

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <p>Something went wrong: {error.message}</p>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
    >
      <AuthProvider {...oidcConfig}>
        <UsersApiContextProvider>
          <MoviesApiContextProvider>
            <TicketsApiContextProvider>
              <SnacksApiContextProvider>
                <StrictMode>
                  <App />
                </StrictMode>
              </SnacksApiContextProvider>
            </TicketsApiContextProvider>
          </MoviesApiContextProvider>
        </UsersApiContextProvider>
      </AuthProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
