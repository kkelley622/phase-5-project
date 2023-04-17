class AppointmentsController < ApplicationController
    before_action :find_appointment

    def index 
        appointments = Appointment.all 
        render json: appointments, status: :ok 
    end

    def show
        render json: @appointment, status: :ok
    end

    def create 
        appointment = Appointment.create(apppointment_params)
        render json: appointment, status: :created 
    end



    private 
    
    def find_appointment 
        @appointment = Appointment.find_by(id: params[:id])
    end

    def apppointment_params 
        params.permit(:user_id, :provider_id, :date, :location)
    end

end
