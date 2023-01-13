class PostsController < ApplicationController

    def create
        post = Post.create!(post_params)
        render json: post
    end

    private

    def post_params
        params.permit(:post_image, :caption, :user_id)
    end

end
