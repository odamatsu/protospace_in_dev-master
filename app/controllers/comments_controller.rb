class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]

  def create
    @comment = Comment.create(text: comment_params[:text], prototype_id: comment_params[:prototype_id], user_id: current_user.id)
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def comment_params
    params.permit(:text, :prototype_id)
  end
end
