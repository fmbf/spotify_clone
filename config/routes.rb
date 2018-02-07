Rails.application.routes.draw do


namespace :api, defaults: {format: :json} do
  # Search by Artist:
  get 'artists/:id/albums', to: 'artists#album_index', as: 'artist_albums'
  get 'artists/:id/songs', to: 'artists#song_index', as: 'artist_songs'

  get 'users/:id/albums', to: 'albums#index_by_user', as: 'user_albums'
  get 'users/:id/artists', to: 'artists#index_by_user', as: 'user_artists'
  get 'users/:id/songs', to: 'songs#index_by_user', as: 'user_songs'

  # Search songs by Album:
  get 'albums/:id/songs', to: 'albums#song_index', as: 'album_songs'



  get 'playlists/:id/songs', to: 'songs#index_by_playlist', as: 'playlist_songs'
  get 'playlists/:id/songs/:song_id', to: 'playlist_songs#show', as: 'playlist_song'
  patch 'playlists/:id/songs/:song_id', to: 'playlist_songs#update', as: 'update_playlist_song'
  delete 'playlists/:id/songs/:song_id', to: 'playlist_songs#destroy', as: 'delete_playlist_song'

end



  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    # Search entitites by User:
    resources :users, only: [:index, :create, :show, :update] do
      resources :playlists, only: [:index]
      resources :follows, only: [:index]
      # resources :artists, only: [:index]
      resources :albums, only: [:index, :show]
      # resources :songs, only: [:index]
    end

    # Search entitites by Artist:





    # Search entitites by ID:

    # resources :playlist_songs, only: [:index, :show, :update, :destroy, :create]

    # resources :playlists, only: [:show, :update, :destroy, :create]
    resources :playlists, only: [:index, :show, :update, :destroy, :create]

    resources :songs, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show, :index]

    resources :follows, only: [:index]
  end
end
