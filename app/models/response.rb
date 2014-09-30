class Response < ActiveRecord::Base
  validate :user_hasnt_answered_poll

  validates :answer_choice_id, :respondent_id, presence: true
  validates :answer_choice_id, uniqueness: { scope: :respondent_id }

  belongs_to :answer_choice, dependent: :destroy, counter_cache: true

  belongs_to :respondent, 
            foreign_key: 'respondent_id', 
            class_name: 'User'
  has_one :poll, through: :answer_choice

  def user_hasnt_answered_poll
    if poll.respondents
      .where("answer_choices.id <> ?", self.answer_choice_id)
      .include?(respondent)
        
        errors.add(:poll, "Already answered")
    end
  end
end

    

