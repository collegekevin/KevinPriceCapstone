class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :user_image, :bio
  has_many :posts
  has_many :comments
  has_many :ad_clicks
  has_many :ads, through: :ad_clicks
end
