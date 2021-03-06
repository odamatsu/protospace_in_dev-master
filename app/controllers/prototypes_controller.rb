class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @prototypes = Prototype.order("likes_count DESC").page(params[:page]).per(8)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def newest
    @prototypes = Prototype.order("created_at DESC").page(params[:page]).per(8)
    respond_to do |format|
      format.html
      format.json
    end
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
    redirect_to root_path notice: ""
  end

  def edit
    @main = @prototype.captured_images.main
    @sub = @prototype.captured_images.sub
  end

  def update
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
      :tag_web,
      :tag_ui,
      :tag_app,
      captured_images_attributes: [:id, :content, :status]
    )
  end

end
