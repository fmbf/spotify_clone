json.extract! song, :id, :title, :artist_id, :album_id, :song_path
json.artist song.artist.name
json.album song.album.title
json.img_path song.album.img_path
json.followers song.followers.ids
json.follower_count song.followers.count
json.playlists_ids song.playlists.ids
