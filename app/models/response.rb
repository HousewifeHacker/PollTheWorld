class Response < ActiveRecord::Base
  validates :answer_choice_id, :respondent_id, presence: true

  belongs_to :answer_choice, dependent: :destroy, counter_cache: true

  belongs_to :respondent, 
            foreign_key: 'respondent_id', 
            class_name: 'User'
  has_one :poll, through: :answer_choice
end
