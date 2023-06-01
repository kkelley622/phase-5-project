import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProvidersLanding = () => {
    const appointments = useSelector(store => store.appointmentsReducer);

    const providers = appointments.map(app => app.provider);
    const uniqueProviders = Array.from(new Set(providers.map(obj => JSON.stringify(obj)))).map(str => JSON.parse(str));
    const limitedProviders = uniqueProviders.slice(0,5).map(provider =>  <li key={provider.id}>{provider.first_name} {provider.last_name}, {provider.specialty}</li>)

    
  return (
    <div className='grid-item'>
    <h1>Some of My Providers</h1>
    <ul>{limitedProviders}</ul>
    <Link to="/providers">All of My Providers</Link>
    </div>
  )
}

export default ProvidersLanding