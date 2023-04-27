import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/navigation/Navbar';
import Login from './components/auth/Login';
import Landing from './components/user/Landing';
import MedList from './components/meds/MedList';
import Signup from './components/auth/Signup';
import AppointmentsList from './components/appointments/AppointmentsList';
import ProblemsList from './components/problems/ProblemsList';
import ProceduresList from './components/procedures/ProceduresList';
import ProvidersList from './components/providers/ProvidersList';
import { useEffect } from 'react';
import { loadMeds } from './actions/meds';

function App() {

  const reduxState = useSelector((store) => store.medsReducer);
  console.log(reduxState)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMeds())
  }, [dispatch])

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
        <Route path="/:user_name/procedures" element={<ProceduresList />} />
        <Route path="/:user_name/providers" element={<ProvidersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
