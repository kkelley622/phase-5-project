import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Errors from './components/errors/Errors';
import Navbar from './components/navigation/Navbar';
import Login from './components/auth/Login';
import Landing from './components/user/Landing';
import MedList from './components/meds/MedList';
import Signup from './components/auth/Signup';
import AppointmentsList from './components/appointments/AppointmentsList';
import ProblemsList from './components/problems/ProblemsList';
import ProceduresList from './components/procedures/ProceduresList';
import ProvidersList from './components/providers/ProvidersList';
import { useEffect, useState } from 'react';
import { loadMeds } from './actions/meds';
import PrescriptionsList from './components/prescriptions/PrescriptionsList';
import { loadPrescriptions } from './actions/prescriptions';
import { loadAppointments } from './actions/appointments';
import { loadProblems } from './actions/problems';
import { loadCurrentUser } from './actions/users';
import { loadProcedures } from './actions/procedures';

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAppointments());
    dispatch(loadCurrentUser(setLoading));
    dispatch(loadMeds());
    dispatch(loadPrescriptions());
    dispatch(loadProblems());
    dispatch(loadProcedures());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Errors />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:user_name" element={<Landing />} />
          <Route path="/:user_name/meds" element={<MedList />} />
          <Route path="/:user_name/appointments" element={<AppointmentsList />} />
          <Route path="/:user_name/prescriptions" element={<PrescriptionsList />} />
          <Route path="/:user_name/problems" element={<ProblemsList /> } />
          <Route path="/:user_name/procedures" element={<ProceduresList />} />
          <Route path="/:user_name/providers" element={<ProvidersList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
