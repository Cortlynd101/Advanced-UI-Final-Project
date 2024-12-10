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
import SnackInventory from './components/SnackInventory'
import TicketInventory from './components/TicketInventory'
import TicketQRCode from './components/TicketQRCode'
import SnackQRCode from './components/SnackQRCode'
import Gallery from './components/Gallery'

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
        <Route path="/tickets" element={<PurchaseTickets />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/snack-inventory" element={<SnackInventory />} />
        <Route path="/ticket-inventory" element={<TicketInventory />} />
        <Route path="/ticket-qr-code" element={<TicketQRCode />} />
        <Route path="/snack-qr-code" element={<SnackQRCode />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App
