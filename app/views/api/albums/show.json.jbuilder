
json.extract! @album, :id, :title, :artist_id, :img_path
json.artist @album.artist.name


# fture stuff
json.current_user_follows x = true; # @album.followers.include?(current_user)

json.songs_ids @album.songs.ids #@album.songs.map { |song| song.id }

json.followers followers = 948542
