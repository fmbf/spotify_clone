
json.extract! @playlist_song, :id, :playlist_id, :song_id

json.current_user_owns @playlist_song.playlist.author == current_user;

# json.author_id @playlist_song.author.id
# json.author @playlist_song.author.username
# json.songs_ids @playlist_song.songs.ids # songs on this playlist
#
#
# json.current_user_owns @playlist_song.author == current_user
# json.current_user_follows @playlist_song.followers.include?(current_user);
# json.followers followers = @playlist_song.followers.count
#
#
# # playlists from same user:
# json.author_playlists do
#   json.array! @playlist_song.author.playlists.ids
# end
