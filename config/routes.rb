Rails.application.routes.draw do
  
  resources :prescriptions
  resources :users, only: [:index, :create, :show]
  resources :procedures
  resources :appointments
  resources :medications
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
