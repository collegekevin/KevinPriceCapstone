class UsersController < ApplicationController
    skip_before_action :authorize

    def index
      render json: User.all, status: :ok
    end
  
    def me
      user = User.find_by!(id: session[:user_id])
      render json: user, status: :ok
    end
  
    def show
      user = User.find(params[:id])
      render json: user, status: :ok
    end

    # def show_ads
    #   user = User.find(params[:id])
    #   redner json 
    # end

  end
