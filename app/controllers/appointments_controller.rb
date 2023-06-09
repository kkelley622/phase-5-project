class AppointmentsController < ApplicationController

    before_action :find_appointment, only: [:show, :update, :destroy]
    before_action only: [:update, :destroy] do 
        authorize_user_resource(@appointment.user_id)
    end

    def index
        if current_user
            @appointments = current_user.appointments.order(:date)
        else
            @appointments = Appointment.all 
        end
        render json: @appointments, status: :ok 
    end

    def show
        render json: @appointment, status: :ok
    end

    def create 
        appointment = current_user.appointments.create!(apppointment_params)
        render json: appointment, status: :created 
    end

    def update 
        @appointment.update!(apppointment_params)
        render json: @appointment, status: :ok
    end

    def destroy
        @appointment.destroy 
        render json: @appointment, status: :ok
    end

    private 
    
    def find_appointment 
        @appointment = Appointment.find(params[:id])
    end

    def apppointment_params 
        params.permit(:user_id, :provider_id, :date, :time, :location)
    end

end
