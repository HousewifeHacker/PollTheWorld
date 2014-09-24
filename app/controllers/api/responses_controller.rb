module Api
  class ResponsesController < ApiController
    def create
      @response = current_choice.responses.new(response_params)
      
      if @response.save
        render json: @response
      else
        render json: @response.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private
    
    def response_params
      params.require(:response).permit(:answer_choice_id, :respondent_id)
    end
    
    def current_choice
      if params[:id]
        @response = Response.find(params[:id])
        @choice = @response.answer_choice
      elsif params[:response]
        @choice = Poll.find(params[:response][:answer_choice_id])
  end
end