class AddDescriptionToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :description, :string
  end
end
