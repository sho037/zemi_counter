class Api::V1::LaboratoriesController < ApplicationController
  def index
    laboratories = Laboratory.all
    render json: {
      is_success: true,
      laboratories: laboratories
    }
  end
end
