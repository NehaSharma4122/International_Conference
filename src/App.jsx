import './index.css';
import Dashboard from './pages/Dashboard';
import Navbar from '../Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
