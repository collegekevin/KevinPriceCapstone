class AdClicksController < ApplicationController

    def create
        ad_click = AdClick.create!(ad_click_params)
        render json: ad_click
    end

    # I want to destroy all of one users ad_clicks... how exactly?

    # def destroy
    #     ad_clicks = AdClick.find_all(params[:user_id])
    #     ad_clicks.destroy_all
    #     head :no_content
    # end

        # def destroy
    #     ad_clicks.delete :user_id
    #     head :no_content
    # end

    private

    def ad_click_params
        params.permit(:ad_id, :user_id)
    end

end
