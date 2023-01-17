class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_image, :caption
  belongs_to :user
  has_many :comments
end
