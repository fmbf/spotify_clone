Rails.application.routes.draw do
  # namespace :api do
  #   get 'songs/index'
  # end
  #
  # namespace :api do
  #   get 'songs/show'
  # end
  #
  # namespace :api do
  #   get 'songs/index_by_artist'
  # end
  # namespace :api do
  #   get 'artists/album_index'
  # end

namespace :api, defaults: {format: :json} do
  # Search by Artist:
  get 'artists/:id/albums', to: 'artists#album_index', as: 'artist_albums'
  get 'artists/:id/songs', to: 'artists#song_index', as: 'artist_songs'

  # Search songs by Album:
  get 'albums/:id/songs', to: 'albums#song_index', as: 'album_songs'
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




    resources :playlists, only: [:show, :update, :destroy, :create] do
      # resources :songs, only: [:index]
    end

    # Search entitites by ID:


    # resources :playlists, only: [:show, :update, :destroy, :create]
    resources :songs, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show, :index]
  end
end
