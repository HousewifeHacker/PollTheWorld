class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.references :user, index: true
      t.string :body

      t.timestamps
    end
  end
end
