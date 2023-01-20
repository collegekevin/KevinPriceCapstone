class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  validate :one_like_per_user

  def one_like_per_user
    if self.likes.find_by(user_id: session[:user_id])
      errors.add(:likes, "can only be given once per user")
    end
  end

 # accepts_nested_attributes_for :comments

  # def user_name_too
  #   self.comments.map()
  # end

  def total_likes
    self.likes.length
  end

end
