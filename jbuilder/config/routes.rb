Rails.application.routes.draw do
  # Your routes here!
  namespace :api, defaults: { format: :json } do
    resources :gifts
    resources :guests do
      resources :gifts
    end
    resources :parties
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
