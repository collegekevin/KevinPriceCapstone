class PostsController < ApplicationController

    def index
        render json: Post.all.reverse, status: :ok
    end

    def show
        post = post.find_all(params[:user_id])
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:post_image, :caption, :user_id)
    end

end
