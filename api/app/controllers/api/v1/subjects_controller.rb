class Api::V1::SubjectsController < ApplicationController
  def index
    subjects = Subject.all
    render json: {
      is_success: true,
      subjects: subjects
    }
  end
end
