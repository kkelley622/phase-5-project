class ProblemsController < ApplicationController

    before_action :find_problem, only: [:show, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@problem.user_id)
    end

    def index 
        if current_user
            @problems = current_user.problems 
        else
            @problems = Problem.all 
        end
        render json: @problems, status: :ok
    end

    def show
        render json: @problem, status: :ok
    end

    def create 
        problem = current_user.problems.create!(problem_params)
        render json: problem, status: :created
    end

    def destroy
        @problem.destroy
        render json: @problem, status: :ok 
    end

    private 

    def find_problem
        @problem = Problem.find(params[:id])
    end

    def problem_params
        params.permit(:user_id, :description)
    end
end
