import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navigation/Navbar';
import Login from './auth/Login';
import Landing from './user/Landing';
import MedList from './meds/MedList';
import Signup from './auth/Signup';
import AppointmentsList from './appointments/AppointmentsList';
import ProblemsList from './problems/ProblemsList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:user_name" element={<Landing />} />
        <Route path="/:user_name/meds" element={<MedList />} />
        <Route path="/:user_name/appointments" element={<AppointmentsList />} />
        <Route path="/:user_name/problems" element={<ProblemsList /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
