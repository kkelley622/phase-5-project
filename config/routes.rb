Rails.application.routes.draw do
  
  resources :appointments
  resources :medications, only: [:index, :show, :create]
  resources :prescriptions, only: [:index, :show, :create, :destroy]
  resources :problems
  resources :procedures, only: [:index, :show, :create, :destroy]
  resources :providers, only: [:index]
  resources :users, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/me", to: "users#me"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
