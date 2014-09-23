class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.references :answer_choice, index: true

      t.timestamps
    end
  end
end
