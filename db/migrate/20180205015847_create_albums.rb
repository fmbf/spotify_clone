class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :img_path
      t.string :year

      t.timestamps
    end
    add_index :albums, [:title, :artist_id], unique: true
    add_index :albums, :artist_id
  end
end
