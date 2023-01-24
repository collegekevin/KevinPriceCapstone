class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:comment_text, :user_id, :post_id)
    end

end
