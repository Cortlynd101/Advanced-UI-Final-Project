import { useEffect } from 'react'
import './App.css'
import LogInButton from './components/LogInButton'
import { callAuthApiEndpoint, callPublicApiEndpoint, callSnackApiEndpoint, callTicketApiEndpoint, callUserApiEndpoint } from './apiService'
import { useAuth } from 'react-oidc-context'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Details from './components/Details'
import UpcomingMovies from './components/UpcomingMovies'
import PurchaseTickets from './components/PurchaseTickets'
import Snacks from './components/Snacks'
import UserInventory from './components/UserInventory'

function App() {
  const auth = useAuth();
  useEffect(() => {
    callAuthApiEndpoint(auth.user?.id_token ?? "");
  }, [auth.user?.id_token]);

  useEffect(() => {
    callPublicApiEndpoint();
    callTicketApiEndpoint();
    callSnackApiEndpoint();
    callUserApiEndpoint();
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
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/user-inventory" element={<UserInventory />} />
      </Routes>
    </>
  );
}

export default App
