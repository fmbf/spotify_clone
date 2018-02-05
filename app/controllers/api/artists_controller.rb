class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.order(:name)

    # FIXME:
    # should ony fetch the artist current user follows
    # @artists = Artist.where('follower_id = ?', params[:user_id])
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
