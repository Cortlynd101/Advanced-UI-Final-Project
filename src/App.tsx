import { useEffect } from 'react'
import './App.css'
import LogInButton from './components/LogInButton'
import { callAuthApiEndpoint, callPublicApiEndpoint, callTicketApiEndpoint } from './apiService'
import { useAuth } from 'react-oidc-context'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Details from './components/Details'
import UpcomingMovies from './components/UpcomingMovies'
import PurchaseTickets from './components/PurchaseTickets'

function App() {
  const auth = useAuth();
  useEffect(() => {
    callAuthApiEndpoint(auth.user?.id_token ?? "");
  }, [auth.user?.id_token]);

  useEffect(() => {
    callPublicApiEndpoint();
    callTicketApiEndpoint();
  });

  return (
    <>
      <div className="main">
        <NavBar></NavBar>
        <LogInButton></LogInButton>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route path="/tickets/:id" element={<PurchaseTickets />} />
      </Routes>
    </>
  );
}

export default App
