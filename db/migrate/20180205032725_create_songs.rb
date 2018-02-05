class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.integer :artist_id
      t.integer :album_id
      t.string :song_path
      t.string :duration

      t.timestamps
    end
  end
end
