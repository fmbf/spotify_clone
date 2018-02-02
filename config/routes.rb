Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:index, :create, :show, :update] do
      resources :playlists, only: [:index, :show]
    end

    resources :playlists, only: [:show, :update, :destroy, :create]
  end
end
