class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text
  has_one :user_id
  has_one :post_id
end
