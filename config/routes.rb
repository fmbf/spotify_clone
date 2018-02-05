Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    # Search entitites by User:
    resources :users, only: [:index, :create, :show, :update] do
      resources :playlists, only: [:index]
      resources :artists, only: [:index]
      resources :albums, only: [:index]
    end

    # Search entitites by Artist:
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end

    # Search entitites by ID:
    resources :playlists, only: [:show, :update, :destroy, :create]
    # resources :artists, only: [:show]
    resources :albums, only: [:show]
  end
end
