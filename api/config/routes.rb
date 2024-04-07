Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    mount ActionCable.server => '/cable'
    namespace :v1 do
      resources :subjects, only: [:index]
    end
  end
end
