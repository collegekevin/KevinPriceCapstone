class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_image, :caption
  has_one :user
  has_many :comments
end
