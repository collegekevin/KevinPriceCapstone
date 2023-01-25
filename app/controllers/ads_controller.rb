class AdsController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Ad.all, status: :ok
    end

end
