class Api::ArtistsController < ApplicationController
  def index
    # @artists = Artist.all.order(:name)

    @artists = Artist.where(id: params[:artist_ids])
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
