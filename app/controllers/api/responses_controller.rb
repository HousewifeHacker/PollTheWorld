module Api
  class ResponsesController < ApiController
    def create
      @response = current_user.responses.new(response_params)
      
      if @response.save
        render json: @response
      else
        render json: @response.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private
    
    def response_params
      params.require(:response).permit(:answer_choice_id)
    end
  end
end