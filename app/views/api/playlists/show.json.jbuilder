
json.extract! @playlist, :id, :title, :description, :img_path
json.author_id @playlist.author.id
# current_user_follows: true,
# current_user_owns: true,
# songs_ids: [60, 231, 22, 18, 371],


# fture stuff
json.current_user_owns @playlist.author == current_user
json.current_user_follows x = false; # @playlist.followers.include?(current_user)

json.songs_ids songs_ids = [12, 423, 491] #@playlist.songs.map { |song| song.id }
json.followers followers = 948542
