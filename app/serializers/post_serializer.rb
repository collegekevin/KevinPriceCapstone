class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_image, :caption
  has_one :user_id
end
