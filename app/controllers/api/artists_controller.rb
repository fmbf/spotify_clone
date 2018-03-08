class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    # @artists = Artist.where(id: params[:artist_ids])
  end

  def index_by_user
    @artists = User.find(params[:id]).followed_artists
  end

  def album_index
    @albums = Album.where('artist_id = ?', params[:id])
  end

  def song_index
    @songs = Song.where('artist_id = ?', params[:id])
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    render :show
  end
end
