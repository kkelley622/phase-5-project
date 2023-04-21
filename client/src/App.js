import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import Login from './auth/Login';
import Landing from './user/Landing';
import MedList from './meds/MedList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:user_name" element={<Landing />} />
        <Route path="/:user_name/meds" element={<MedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
