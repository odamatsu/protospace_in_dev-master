class LikesController < ApplicationController
  before_action :authenticate_user!
   def create
      @like = Like.new(user_id: current_user.id, prototype_id: params[:prototype_id])
      @like.save
      @likes = Like.where(prototype_id: params[:prototype_id])
      respond_to do |format|
        format.html
        format.json
      end
   end

   def destroy
      @like = Like.find_by(user_id: current_user.id, prototype_id: params[:prototype_id])
      @likes = Like.where(prototype_id: params[:prototype_id])
      @like.destroy
      @prototypes = Prototype.all
      respond_to do |format|
        format.html
        format.json
      end
   end
end
