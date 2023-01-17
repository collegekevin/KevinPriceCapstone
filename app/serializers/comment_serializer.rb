class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text
  belongs_to :user
  belongs_to :post
end
