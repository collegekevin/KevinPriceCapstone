class AdClicksController < ApplicationController

    def create
        ad_click = AdClick.create!(ad_click_params)
        render json: ad_click
    end

    private

    def ad_click_params
        params.permit(:ad_id, :user_id)
    end

end
