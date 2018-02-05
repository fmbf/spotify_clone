Rails.application.routes.draw do
  namespace :api do
    get 'songs/index'
  end

  namespace :api do
    get 'songs/show'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    # Search entitites by User:
    resources :users, only: [:index, :create, :show, :update] do
      resources :playlists, only: [:index]
      resources :artists, only: [:index]
      resources :albums, only: [:index]
      resources :songs, only: [:index]
    end

    # Search entitites by Artist:
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
      resources :songs, only: [:index]
    end

    # Search entitites by Album:
    resources :albums, only: [:show] do
      resources :songs, only: [:index]
    end

    resources :playlists, only: [:show, :update, :destroy, :create] do
      resources :songs, only: [:index]
    end

    # Search entitites by ID:
    resources :songs, only: [:show]


    # resources :playlists, only: [:show, :update, :destroy, :create]
    # resources :artists, only: [:show]
  end
end
