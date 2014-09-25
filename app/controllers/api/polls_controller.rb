module Api
  class PollsController < ApiController
    # inherits current_user < ApiController < ApplicationController
    # authored_polls is an association on the User model
    def create
      @poll = current_user.authored_polls.new(poll_params)
      
      if @poll.save
        render json: @poll
      else
        render json: @poll.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def update
      @poll = Poll.find(params[:id])
      if @poll.update_attributes(poll_params)
        render json: @poll
      else
        render json: @poll.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @poll = current_user.authored_polls.find(params[:id])
      @poll.try(:destroy)
      render json: {}
    end

    def index
      @polls = Poll.all
      render json: @polls
    end
    
    def show
      @poll = Poll.find(params[:id])
      render :show
    end
    
    private
    
    def poll_params
      params.require(:poll).permit(:body)
    end    
  end
end