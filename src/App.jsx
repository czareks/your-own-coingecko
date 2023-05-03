import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import CryptoFavourite from "./pages/CryptoFavourite";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
        <Route path="/favourite" element={<CryptoFavourite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
