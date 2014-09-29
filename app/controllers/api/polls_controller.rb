module Api
  class PollsController < ApiController
    # inherits current_user < ApiController < ApplicationController
    # authored_polls is an association on the User model
    wrap_parameters(:poll, :include => [:body, :answer_choices_attributes])

    def create
      @poll = current_user.authored_polls.new(poll_params)
      
      if @poll.save
        render json: @poll
      else
        flash.now[:errors] = @poll.errors.full_messages
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
      all_polls = Poll.all
      @polls = all_polls.reject { |poll| poll.respondents.include?(current_user) }
      render :index
    end
    
    def show
      @poll = Poll.find(params[:id])
      render :show
    end
    
    private
    
    def poll_params
      params.require(:poll).permit(:body, :answer_choices_attributes => [:body, :ord])
    end    
  end
end
