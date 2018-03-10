class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]

  def create
    @comment = Comment.create(text: comment_params[:text], comment_id: comment_params[:comment_id], user_id: current_user.id)
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def create.params
    params.permit(:text, :comment_id)
  end
end
