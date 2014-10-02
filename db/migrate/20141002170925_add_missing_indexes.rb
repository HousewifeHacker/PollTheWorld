class AddMissingIndexes < ActiveRecord::Migration
  def change
    add_index :responses, :respondent_id
    add_index :responses, [:answer_choice_id, :respondent_id]
  end
end

