class PostsController < ApplicationController

    def index
        render json: Post.all, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post
    end

    private

    def post_params
        params.permit(:post_image, :caption, :user_id)
    end

end