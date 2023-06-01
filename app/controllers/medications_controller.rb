class MedicationsController < ApplicationController

    before_action :find_medication, only: [:show]
    skip_before_action :authorize, only: [:index]
    
    def index 
        medications = Medication.all 
        render json: medications, status: :ok 
    end

    def show 
        render json: @medication, status: :ok 
    end

    def create 
        medication = Medication.create!(medication_params)
        render json: medication, status: :created
    end

    private 

    def find_medication 
        @medication = Medication.find(params[:id])
    end

    def medication_params 
        params.permit(:brand_name, :generic_name)
    end
end
