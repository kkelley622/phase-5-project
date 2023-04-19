Rails.application.routes.draw do
  
  resources :prescriptions, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show]
  resources :procedures, only: [:index, :show, :create, :destroy]
  resources :appointments
  resources :medications, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
