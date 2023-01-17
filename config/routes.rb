Rails.application.routes.draw do
  
  resources :ads
  resources :comments
  resources :posts
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  #I'm going to have to update my routes at the end.
  get "/me", to: "users#show"

  post "/create", to: "sessions#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  #these can just be covered up in resources. Both could be "/posts" 
  get "/posts", to: "posts#index"
  post "/createpost", to: "posts#create"

  #this could just be /comments
  post "/createcomment", to: "comments#create"

  #this could just be /likes
  post "/createlike", to: "likes#create"

  #this could just be /ads
  get "/ads", to: "ads#index"

  #this could just be /ad_clicks...I think"? not sure about _
  post "/createadclick", to: "ad_clicks#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
