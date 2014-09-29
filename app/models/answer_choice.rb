class AnswerChoice < ActiveRecord::Base
  validates :poll, :body, :ord, presence: true

  belongs_to :poll, dependent: :destroy
  
  has_many :responses
  has_many :respondents, through: :responses
end
