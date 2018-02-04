class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all

    # FIXME:
    # should ony fetch the artist current user follows
    # @artists = Artist.where('follower_id = ?', params[:user_id])
  end

  def show
    @artist = Artist.find_by(id: params[:id])
    render :show
  end
end
