class Api::SongsController < ApplicationController
  def index
  end

  def index_by_artist
    @songs = Song.where('artist_id = ?', params[:artist_id])
  end

  def index_by_album
    @songs = Song.where('album_id = ?', params[:album_id])
  end

  def show
  end
end
