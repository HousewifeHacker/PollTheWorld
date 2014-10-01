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
    
    def destroy
      @poll = current_user.authored_polls.find(params[:id])
      @poll.try(:destroy)
      render json: {}
    end

    def index
      if params[:answered] == "false"
        @polls = Poll.where.not(id: current_user.answered_polls).order(id: :desc)
      else
        @polls = current_user.answered_polls.order(id: :desc)
      end
      @polls = @polls.page(params[:page]).per(15)
      @page_number = params[:page]
      @total_pages = @polls.total_pages
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
