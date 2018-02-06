class Api::FollowsController < ApplicationController

  def index
    @follows = Follow.all
    # @follows = Follow.where('user_id = ?', params[:user_id])
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.user = current_user

    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = Follow.find_by(id: params[:id])
    # follow = Follow.where('followable_id = ?', params[:followable_id])
    follow.destroy
    render json: {}
  end

  private
  def follow_params
    params.require(:follow).permit(:followable_id)
  end
end
