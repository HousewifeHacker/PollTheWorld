class AnswerChoice < ActiveRecord::Base
  belongs_to :poll, dependent: :destroy
  
  has_many :responses
  has_many :respondents, through: :responses
end
