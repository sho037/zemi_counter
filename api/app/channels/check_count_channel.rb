class CheckCountChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "check_count_channel_#{params[:laboratory_id]}"
    laboratory = Laboratory.find(params[:laboratory_id])
    transmit({ registrants_str: laboratory.registrants_str})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
