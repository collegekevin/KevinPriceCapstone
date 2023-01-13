class AdsController < ApplicationController

    def index
        render json: Ad.all, status: :ok
    end

end
