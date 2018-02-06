

json.extract! @artist, :id, :name, :img_path

# fture stuff
json.current_user_follows x = false; # @playlist.followers.include?(current_user)
json.albums_ids albums_ids = [923, 401, 14]
json.songs_ids songs_ids = [12, 423, 491] #@playlist.songs.map { |song| song.id }
json.followers followers = 948542


# playlists this artist is featured on:
json.playlists do
  @artist.songs.each do |song|
    json.array! song.playlists.ids
  end
end
