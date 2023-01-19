class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  def get_name
    self.user.username
  end


end
