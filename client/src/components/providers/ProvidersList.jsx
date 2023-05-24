import React from 'react'
import { useSelector } from 'react-redux'

const ProvidersList = () => {
  const providers = useSelector(store => store.providersReducer);

  const providersList = providers.map(provider => <li key={provider.id}>{provider.first_name} {provider.last_name}</li>)

  return (
    <>
      <h1>My Providers</h1>
      <div>{providersList}</div>
    </>
  )
}

export default ProvidersList