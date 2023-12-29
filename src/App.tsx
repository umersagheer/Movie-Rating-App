import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/auth";
import Home from "./pages/home";
import TvShowsPage from "./pages/tvshows";
import MoviesPage from "./pages/movies";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rated" element={<h1>Rated</h1>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/tvshows/:id" element={<TvShowsPage />} />
        <Route path="/movies/:id" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
