

json.extract! @album, :id, :title, :artist_id, :img_path
json.artist @album.artist.name
json.current_user_follows current_user.followed_albums.include?(@album)
json.followers followers = @album.followers.count
json.songs_ids @album.songs.ids
