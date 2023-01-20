class Follow < ApplicationRecord
  # The user giving the follow
  belongs_to :follower, foreign_key: :follower_id, class_name: "User"

  # The user being followed
  belongs_to :user_they_follow, foreign_key: :user_they_follow_id, class_name: "User"

  # I think I'd want a custom validater to make sure the person isn't alread following
  # the person... but if I change the button on the front end that might be better. Both
  # would also be good.
  # validates :follower, uniqueness: true

  validates_uniqueness_of :follower_id, scope: :user_they_follow_id

end
