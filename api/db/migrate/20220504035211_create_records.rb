class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.references :user, type: :string
      t.float :accuracy, null: false
      t.integer :number_of_correct_answer, null: false

      t.timestamps
    end
    add_foreign_key :records, :users, column: :user_id, primary_key: :user_id
  end
end
