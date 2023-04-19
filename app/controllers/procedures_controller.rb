class ProceduresController < ApplicationController

    before_action :find_procedure, only: [:show, :destroy]

    def index 
        procedures = Procedure.all 
        render json: procedures, status: :ok
    end

    def show 
        render json: @procedure, status: :ok
    end

    def create 
        procedure = Procedure.create!(procedure_params)
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
