class Api::AlbumsController < ApplicationController
  def index
  end

  def index_by_artist
    @albums = Album.where('artist_id = ?', params[:artist_id])
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end
end
