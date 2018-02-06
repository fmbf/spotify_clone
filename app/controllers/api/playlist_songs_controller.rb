class Api::PlaylistSongsController < ApplicationController
  def index
    @playlist_songs = PlaylistSong.all
  end

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.author = current_user

    if @playlist_song.save
      render "api/playlist_songs/show"
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end

  end

  def show
    @playlist_song = PlaylistSong.find_by(id: params[:id])
    render :show
  end

  def update
    # to change ord??
  end

  def destroy
    playlist_song = PlaylistSong.find_by(id: params[:id])
    playlist_song.destroy
    render json: {}
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
