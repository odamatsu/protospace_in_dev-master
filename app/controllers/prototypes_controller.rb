class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @prototypes = Prototype.all.order("likes_count DESC").page(params[:page]).per(8)
  end

  def newest
    @prototypes = Prototype.all.order("created_at DESC").page(params[:page]).per(8)
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      flash.now[:alert] = 'New prototype was unsuccessfully created'
      render :new
     end
  end

  def show
    @comment = Comment.new
    @comments = @prototype.comments.includes(:user)
    @likes = Like.where(prototype_id: params[:id])
    @like = Like.where(user_id: current_user.id, prototype_id: params[:id]) if user_signed_in?
  end

  def destroy
    prototype = Prototype.find(params[:id])
    prototype.destroy if prototype.user_id == current_user.id
    redirect_to root_path
  end

  def edit
    @main = @prototype.captured_images.main
    @sub = @prototype.captured_images.sub
    @tags_list = @prototype.tags
  end

  def update
    # if @prototype.update(prototype_params) && @prototype.where().first_or_initilaize
    if @prototype.update(prototype_params)
      redirect_to prototype_path, notice: 'Prototype was successfully updated.'
    else
      render :edit
    end
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:id, :content, :status],
      tags_attributes: [:id, :name]
    )
  end

end
