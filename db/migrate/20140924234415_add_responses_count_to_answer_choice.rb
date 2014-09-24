class AddResponsesCountToAnswerChoice < ActiveRecord::Migration
  def change
    add_column :answer_choices, :responses_count, :integer
  end
end
