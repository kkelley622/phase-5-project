import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
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
import { loadProviders } from './actions/providers';
import AppointmentEdit from './components/appointments/AppointmentEdit';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentUser(setLoading));
    dispatch(loadMeds());
    dispatch(loadProviders());
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Errors />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landing />} />
          <Route path="/meds" element={<MedList />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/:id/edit" element={<AppointmentEdit />}/>
          <Route path="/prescriptions" element={<PrescriptionsList />} />
          <Route path="/problems" element={<ProblemsList /> } />
          <Route path="/procedures" element={<ProceduresList />} />
          <Route path="/providers" element={<ProvidersList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
