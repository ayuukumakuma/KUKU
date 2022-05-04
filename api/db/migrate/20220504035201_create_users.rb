class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users, id: false do |t|
      t.string :email, null: false
      t.string :user_id, primary_key: true, null: false
      t.timestamps
    end
  end
end
