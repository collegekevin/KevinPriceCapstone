class Like < ApplicationRecord
  belongs_to :user
  belongs_to :post
  # validates :user_id, uniqueness: true

  # User.all.each do |user|
  #   user.post = user.post.uniq
  # end

  validates_uniqueness_of :user_id, scope: :post_id

end
