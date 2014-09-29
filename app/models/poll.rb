class Poll < ActiveRecord::Base
  validates :user_id, :body, presence: true
  validates :answer_choices, length: { minimum: 2 }

  belongs_to :user

  has_many :answer_choices, inverse_of: :poll
  has_many :responses, through: :answer_choices
  has_many :respondents, through: :responses

  accepts_nested_attributes_for :answer_choices
end
