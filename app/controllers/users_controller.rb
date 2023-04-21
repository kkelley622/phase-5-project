class UsersController < ApplicationController

    before_action :find_user, only: [:show]
    before_action :logged_in, only: [:create]
    skip_before_action :authorize, only: [:create]

    def index 
        users = User.all
        render json: users, status: :ok 
    end

    def me 
        render json: current_user, status: :ok 
    end

    def show
        render json: @user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private 
    
    def find_user 
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :user_name, :password, :password_confirmation, :dob)
    end
end
