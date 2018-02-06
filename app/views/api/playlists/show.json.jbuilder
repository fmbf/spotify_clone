
json.extract! @playlist, :id, :title, :description, :img_path
json.author_id @playlist.author.id
json.author @playlist.author.username
json.songs_ids @playlist.songs.ids # songs on this playlist


json.current_user_owns @playlist.author == current_user
json.current_user_follows @playlist.followers.include?(current_user);
json.followers followers = @playlist.followers.count


# playlists from same user:
json.author_playlists do
  json.array! @playlist.author.playlists.ids
end
