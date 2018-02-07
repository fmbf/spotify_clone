json.extract! user, :id, :username, :img_path
json.playlists_ids user.playlists.ids
json.artists_ids user.followed_artists.ids
json.albums_ids user.followed_albums.ids
json.songs_ids user.followed_songs.ids
json.followers user.followers.ids
json.follower_count user.followers.count
