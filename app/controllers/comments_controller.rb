class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]

  def create
    @comment = Comment.create(comment_params)
    respond_to do |format|
      format.html { redirect_to prototype_path(params[:prototype_id])  }
      format.json
    end
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:text, :prototype_id).merge(user_id: current_user.id)
  end
end
