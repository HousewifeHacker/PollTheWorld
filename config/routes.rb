Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  resources :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :polls, except: [:new, :edit]
    resources :answer_choices, only: [:create, :update, :destroy]
    resources :responses, only: [:create]
    post 'url', to: 'urls#shorten'
  end
end
