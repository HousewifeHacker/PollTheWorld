class AnswerChoice < ActiveRecord::Base
  belongs_to :poll
  has_many :responses
  has_many :respondents, through: :responses
end
