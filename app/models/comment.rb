class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :prototype

  def length_comments
    comments.length
  end
end
