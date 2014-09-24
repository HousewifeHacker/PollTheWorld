class Response < ActiveRecord::Base
  belongs_to :answer_choice, dependent: :destroy, counter_cache: true

  has_many :respondents, 
            foreign_key: 'respondent_id', 
            class_name: 'User'
  has_one :answered_poll, through: :answer_choice
end
