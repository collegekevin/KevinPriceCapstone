class LikesController < ApplicationController

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end

    private

    def like_params
        params.permit(:post_id, :user_id)
    end

end