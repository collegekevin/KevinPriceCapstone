class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text
  belongs_to :user_id
  belongs_to :post_id
end
