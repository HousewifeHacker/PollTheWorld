module Api
  class AnswerChoicesController < ApiController
    # using choice ivar instead of answer_choice to save typing
    def create
      @choice = current_poll.answer_choices.new(choice_params)
      
      if @choice.save
        render json: @choice
      else
        render json: @choice.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def update
      @choice = AnswerChoice.find(params[:id])
      if @choice.update_attributes(choice_params)
        render json: @choice
      else
        render json: @choice.errors.full_messages,
               status: :unprocessable_entity
      end
    end
  
    private
    
    def current_poll
      if params[:id]
        @choice = AnswerChoice.find(params[:id])
        @poll = @choice.poll
      elsif params[:answer_choice]
        @poll = Poll.find(params[:answer_choice][:poll_id])
      end
    end
    
    def choice_params
      params.require(:answer_choice).permit(:poll_id, :body)
    end
  end
end