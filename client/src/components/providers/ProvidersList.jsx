import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProvidersList = () => {
  const providers = useSelector(store => store.providersReducer);
  const { loggedIn } = useSelector(store => store.usersReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
  }, [loggedIn, navigate])

  const providersList = providers.map(provider => <li key={provider.id}>{provider.first_name} {provider.last_name}</li>)

  return (
    <>
      <h1>My Providers</h1>
      <div>{providersList}</div>
    </>
  )
}

export default ProvidersList