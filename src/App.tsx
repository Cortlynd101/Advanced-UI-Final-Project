import { useEffect } from 'react'
import './App.css'
import LogInButton from './components/LogInButton'
import { callAuthApiEndpoint, callPublicApiEndpoint } from './apiService'
import { useAuth } from 'react-oidc-context'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Details from './components/Details'
import UpcomingMovies from './components/UpcomingMovies'

function App() {
  const auth = useAuth();
  useEffect(() => {
    callAuthApiEndpoint(auth.user?.id_token ?? "");
  }, [auth.user?.id_token]);

  useEffect(() => {
    callPublicApiEndpoint();
  });

  // const causeError = () => {
  //   throw new Error("Error!! You threw an error by clicking that button!!");
  // };

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
        {/* <Route path="/modify/:id" element={<ModifyGame />} /> */}
        {/* <Route path="/AddGame" element={<AddGame />} /> */}
        {/* <Route path="/image-page" element={<ImagePage />} /> */}
      </Routes>
      {/* <div className="main">
        <h1>Click to cause an error: </h1>
        <button className="btn btn-danger" onClick={causeError}>
          Error!
        </button>
      </div> */}
    </>
  );
}

export default App
