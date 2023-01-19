class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
 # accepts_nested_attributes_for :comments

  # def user_name_too
  #   self.comments.map()
  # end

  def total_likes
    self.likes.length
  end

end
