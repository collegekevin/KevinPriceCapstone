class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :user_image, :bio, :total_followers, :total_users_you_follow, :list_followers, :list_users_you_follow
  has_many :comments
  has_many :ad_clicks
  has_many :ads, through: :ad_clicks
  has_many :followers
  has_many :users_they_follow
end
