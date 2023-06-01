import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProvidersList = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const appointments = useSelector(store => store.appointmentsReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])

  const providers = appointments.map(app => app.provider);
  const uniqueProviders = Array.from(new Set(providers.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str));
  const providersList = uniqueProviders.map(provider =>  <li key={provider.id}>{provider.first_name} {provider.last_name}, {provider.specialty}</li>)

  return (
    <div className='providers'>
      <h1>My Providers</h1>
      <ul>{providersList}</ul>
    </div>
  )
}

export default ProvidersList