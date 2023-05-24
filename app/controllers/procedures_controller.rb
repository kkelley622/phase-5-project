class ProceduresController < ApplicationController

    before_action :find_procedure, only: [:show, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@procedure.user_id)
    end

    def index
        if current_user
            @procedures = current_user.procedures
        else
            @procedures = Procedure.all
        end 
        render json: @procedures, status: :ok
    end

    def show 
        render json: @procedure, status: :ok
    end

    def create 
        procedure = current_user.procedures.create!(procedure_params)
        render json: procedure, status: :created 
    end

    def destroy
        @procedure.destroy 
        render json: @procedure
    end

    private

    def find_procedure
        @procedure = Procedure.find(params[:id])
    end

    def procedure_params 
        params.permit(:user_id, :description, :date)
    end
end
