class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false, index: true
      t.integer :followable_id, null: false
      t.string :followable_type, null: false

      t.timestamps
    end
    add_index :follows, [:followable_id, :user_id], unique: true
  end
end
