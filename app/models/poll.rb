class Poll < ActiveRecord::Base
  validates :user_id, :body, presence: true

  belongs_to :user

  has_many :answer_choices
  has_many :responses, through: :answer_choices
  has_many :respondents, through: :responses
end
