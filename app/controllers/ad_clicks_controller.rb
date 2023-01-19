class AdClicksController < ApplicationController

    def create
        ad_click = AdClick.create!(ad_click_params)
        render json: ad_click
    end

    def destroy
        ad_clicks.delete :user_id
        head :no_content
    end

    # Is there an easy way to destroy all of one users ad_clicks?

    # def destroy
    #     ad_clicks = AdClick.find(params[:id])
    #     ad_clicks.destroy
    #     head :no_content
    # end

    private

    def ad_click_params
        params.permit(:ad_id, :user_id)
    end

end
