class CreateAnswerChoices < ActiveRecord::Migration
  def change
    create_table :answer_choices do |t|
      t.references :poll, index: true
      t.string :body

      t.timestamps
    end
  end
end
