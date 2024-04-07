class CheckCountChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    subject = Subject.find_by(name: params[:subject_name])
    laboratory = subject.laboratories.find_by(name: params[:laboratory_name])
    stream_from "check_count_channel_#{laboratory.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
