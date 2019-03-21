Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm

  # Create a root that shows the google maps 

  root to: 'restaurants#index'
  get '/customers/login' => 'sessions#new'
  post '/customers/login' => 'sessions#create'
  get '/customers/logout' => 'sessions#destroy'
  get '/quizzes' => 'quizzes#show'

  resources :questions, only: [:show]
  resources :results, only: [:index, :show, :create]
  
  resources :restaurants do
    resources :quizzes, only: [:show, :create, :update, :index]
    resources :dishes, only: [:create, :index]
  end
  
end

