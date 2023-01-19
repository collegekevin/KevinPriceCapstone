class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_text, :get_name
  belongs_to :user
  belongs_to :post
end
