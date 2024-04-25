import './index.css';
import Dashboard from './pages/Dashboard';
import Navbar from './Components/Navbar';
import Partner from './pages/Partner/Partner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Partner" element={<Partner/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
