class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :img_path

      t.timestamps
    end
    add_index :playlists, [:title, :author_id], unique: true
    add_index :playlists, :author_id
  end
end
