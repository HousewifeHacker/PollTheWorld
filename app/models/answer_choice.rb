class AnswerChoice < ActiveRecord::Base
  validates :poll_id, :body, :ord, presence: true

  belongs_to :poll, dependent: :destroy
  
  has_many :responses
  has_many :respondents, through: :responses
end
