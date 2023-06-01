class ProvidersController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        providers = Provider.all.order(:last_name)
        render json: providers, status: :ok
    end

    def create 
        provider = Provider.create!(provider_params)
        render json: provider, status: :ok
    end

    private

    def provider_params 
        params.permit(:first_name, :last_name, :specialty)
    end
end
