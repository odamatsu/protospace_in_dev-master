class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :edit, :update, :destroy]
  def create

  end
end
