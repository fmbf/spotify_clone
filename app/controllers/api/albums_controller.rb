class Api::AlbumsController < ApplicationController
  def index
    # @albums = Album.all
    @albums = Album.where(id: params[:album_ids])
  end


  def index_by_user
    # @albums = Album.all.select {|album| album.followers.include?(params[:id])}
    @albums = User.find(params[:id]).followed_albums
  end


  def song_index
    @songs = Song.where('album_id = ?', params[:id])
  end


  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end
end
