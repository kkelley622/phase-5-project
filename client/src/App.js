import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from './navigation/Navbar';
import Login from './auth/Login';
import Landing from './user/Landing';
import MedList from './meds/MedList';
=======
>>>>>>> 79cfce83504197f62a474f2b1e3c4c74c300618a

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:user_name" element={<Landing />} />
        <Route path="/:user_name/meds" element={<MedList />} />
      </Routes>
=======
      
>>>>>>> 79cfce83504197f62a474f2b1e3c4c74c300618a
    </BrowserRouter>
  );
}

export default App;
