

json.extract! @album, :id, :title, :artist_id, :img_path
json.artist @album.artist.name
json.current_user_follows @album.followers.include?(current_user)
json.followers followers = @album.followers.count
json.songs_ids @album.songs.ids
