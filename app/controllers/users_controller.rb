class UsersController < ApplicationController
    before_action :find_user

    def index 
        users = User.all
        render json: users, status: :ok 
    end

    def show
        render json: @user, status: :ok
    end

    def create 
        user = User.create(user_params)
        render json: user, status: :created
    end

    private 
    
    def find_user 
        @user = User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :user_name, :password, :dob)
    end
end
