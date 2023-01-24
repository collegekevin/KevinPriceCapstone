class FollowsController < ApplicationController

    def create
        follow = Follow.create!(follow_params)
        render json: follow, status: :created
    end

    private

    def follow_params
        params.permit(:follower_id, :user_they_follow_id)
    end

end