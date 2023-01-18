class FollowsController < ApplicationController

    def create
        folllow = Follow.create!(follow_params)
        render json: follow
    end

    private

    def follow_params
        params.permit(:follower, :user_they_follow)
    end

end