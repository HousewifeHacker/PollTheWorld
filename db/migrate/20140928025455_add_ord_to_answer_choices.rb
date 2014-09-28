class AddOrdToAnswerChoices < ActiveRecord::Migration
  def change
    add_column :answer_choices, :ord, :integer
  end
end
