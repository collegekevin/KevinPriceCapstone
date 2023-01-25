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

    def update 
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :accepted
    end

    # def show_ads
    #   user = User.find(params[:id])
    #   redner json 
    # end
private

  def user_params
    params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :user_image, :bio)
  end

end
