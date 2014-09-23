class Poll < ActiveRecord::Base
  belongs_to :user

  has_many :answer_choices
  has_many :responses, through: :answer_choices
end
