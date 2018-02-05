class Api::SongsController < ApplicationController
  def index
  end

  def index_by_artist
    @songs = Song.where('artist_id = ?', params[:artist_id])
  end

  def index_by_album
    @songs = Song.where('album_id = ?', params[:album_id])
  end

  def index_by_user
    # FIXME: NEEDS FOLLOWS
    # @songs = Song.where('user_id = ?', params[:user_id])
  end

  def show
    @song = Song.find_by(id: params[:id])
  end
end
