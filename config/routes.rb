Rails.application.routes.draw do
  
  resources :ads
  resources :comments
  resources :posts
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/me", to: "users#show"

  post "/create", to: "sessions#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  get "/posts", to: "posts#index"
  post "/createpost", to: "posts#create"

  post "/createcomment", to: "comments#create"

  post "/createlike", to: "likes#create"

  get "/ads", to: "ads#index"

  post "/createadclick", to: "ad_clicks#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
