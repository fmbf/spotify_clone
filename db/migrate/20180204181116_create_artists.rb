class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :img_path

      t.timestamps
    end
    add_index :artists, :name
  end
end
