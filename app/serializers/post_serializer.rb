class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_image, :caption, :total_likes
  has_one :user
  has_many :comments

  # def comments
  #   ActiveModel::SerializableResource.new(object.comments)
  # end

end
