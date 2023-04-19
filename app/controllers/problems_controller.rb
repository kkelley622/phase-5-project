class ProblemsController < ApplicationController

    before_action :find_problem, only: [:show]

    def index 
        if params[:user_id]
            user = User.find_by_id(params[:user_id])
            @problems = user.problems 
        else
            @problems = Problem.all 
        end
        render json: @problems, status: :ok
    end

    def show
        render json: @problem, status: :ok
    end

    def create 
        problem = Problem.create!(problem_params)
        render json: problem, status: :created
    end

    private 

    def find_problem
        @problem = Problem.find(params[:id])
    end

    def problem_params
        params.permit(:user_id, :description)
    end
end
