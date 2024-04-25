import './index.css';
import Dashboard from './pages/Dashboard';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Speakers from './pages/Speakers';
import Timeline from './Components/Timeline';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Speakers" element={<Speakers />}></Route>
          <Route path="/Timeline" element={<Timeline />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
