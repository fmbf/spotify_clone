class AddIndexToFollows < ActiveRecord::Migration[5.1]
  def change
    remove_index :follows, [:followable_id, :user_id]
    add_index :follows, [:followable_id, :followable_type, :user_id], unique: true
  end
end
