class Api::PlaylistSongsController < ApplicationController
  def index
    @playlist_songs = PlaylistSong.all
  end

  def create
    playlist_id = params[:id]
    song_id = params[:song_id]
    # Play
    @playlist_song = PlaylistSong.new(song_id: song_id, playlist_id: playlist_id)
    # @playlist_song.author = current_user

    if @playlist_song.playlist.author == current_user && @playlist_song.save
      render "api/playlist_songs/show"
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end

  end

  def show
    # @playlist_song = PlaylistSong.find_by(id: params[:id])
    @playlist_song = PlaylistSong.find_by(playlist_id: params[:id], song_id: params[:song_id])
    render :show
  end


  def destroy
    playlist_song = PlaylistSong.find_by(playlist_id: params[:id], song_id: params[:song_id])
    playlist_song.destroy
    render json: {}
  end

  private
  def playlist_song_params
    params.require(:playlist).permit(:id, :playlist_id, :song_id)
  end
end
