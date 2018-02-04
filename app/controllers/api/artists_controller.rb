class Api::ArtistsController < ApplicationController
  def index
    
    # FIXME:
    @artists = Artist.all
    # should ony fetch the artist current user follows
    # @artists = Artist.where('author_id = ?', params[:user_id])

  end

  def show
    @artist = Artist.find_by(id: params[:id])
    render :show
  end
end
