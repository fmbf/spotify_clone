json.extract! @song, :id, :title, :artist_id, :album_id, :song_path

# playlists this song is featured on:
json.playlists do
  json.array! @song.playlists.ids
end
