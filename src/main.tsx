import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';

const uri = import.meta.env.VITE_REDIRECT_URI;

if (!uri) console.log("VITE_REDIRECT_URI is not set");
else console.log("VITE_REDIRECT_URI is: " + { uri });

const oidcConfig: AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/advanced-frontend/",
  client_id: "cort-id",
  redirect_uri: `${uri}`,
  // ...
};

createRoot(document.getElementById('root')!).render(
  <AuthProvider {...oidcConfig}>
    <StrictMode>
      <App />
    </StrictMode>,
  </AuthProvider>
)
