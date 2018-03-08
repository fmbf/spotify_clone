class Api::SongsController < ApplicationController
  def index
    # @songs = User.where(id: params[:song_ids])
    @songs = Song.all
  end

  def index_by_artist
    @songs = Song.where('artist_id = ?', params[:artist_id])
  end

  def index_by_album
    @songs = Song.where('album_id = ?', params[:album_id])
  end

  def index_by_playlist
    @songs = Playlist.find(params[:id]).songs
  end

  def index_by_user
    @songs = User.find(params[:id]).followed_songs
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end
end
