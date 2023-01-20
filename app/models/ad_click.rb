class AdClick < ApplicationRecord
  belongs_to :ad
  belongs_to :user
  # validates :user_id, uniqueness: true
  validates_uniqueness_of :user_id, scope: :ad_id
end
