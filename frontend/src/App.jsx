import './index.css';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Speakers from './pages/Speakers';
import Partner from './pages/Partner/Partner';
import Time from './pages/Time';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const [data,setdata] = useState(null);
  useEffect(()=>{
    fetch('/api')
    .then(res=>res.json())
    .then(data =>setdata(data.message))
    .catch(err =>console.log(err));
  },[]);
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Speakers" element={<Speakers />}></Route>
          <Route path="/Time" element={<Time />}></Route>
          <Route path="/Partner" element={<Partner/>}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
