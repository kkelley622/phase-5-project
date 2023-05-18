class PrescriptionsController < ApplicationController
    
    before_action :find_prescription, only: [:show, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@appointment.user_id)
    end
    
    def index
        if params[:user_id] 
            user = User.find_by_id(params[:user_id])
            @prescriptions = user.prescriptions 
        else
            @prescriptions = Prescription.all
        end 
        render json: @prescriptions, status: :ok
    end

    def show 
        render json: @prescription, status: :ok 
    end

    def create 
        presciption = Prescription.create!(presciption_params)
        render json: presciption, status: :created
    end

    def destroy
        @prescription.destroy
        render json: @prescription, status: :ok 
    end

    private 

    def find_prescription 
        @prescription = Prescription.find(params[:id])
    end

    def presciption_params 
        params.permit(:user_id, :medication_id, :dose, :frequency, :start_date, :end_date)
    end
end
