

json.extract! @artist, :id, :name, :img_path

# fture stuff
json.current_user_follows @artist.followers.include?(current_user);

json.albums_ids @artist.albums.ids
json.songs_ids @artist.songs.ids
json.followers followers = @artist.followers.count


# playlists this artist is featured on:
json.playlists do
  @artist.songs.each do |song|
    json.array! song.playlists.ids
  end
end
