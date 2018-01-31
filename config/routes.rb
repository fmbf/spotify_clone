Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show, :update]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
  end
end
