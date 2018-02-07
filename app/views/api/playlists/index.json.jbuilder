

# @playlists.each do |playlist|
#
#   json.set! playlist.id do
#     json.extract! playlist, :id, :title, :description, :img_path
#     json.author_id playlist.author.id
#     json.author playlist.author.username
#
#     # fture stuff
#     json.current_user_owns playlist.author == current_user
#     json.current_user_follows current_user.followed_playlists.include?(playlist);
#
#
#     json.songs_ids songs_ids = [12, 423, 491] #@playlist.songs.map { |song| song.id }
#     json.followers followers = 948542
#
#   end
# end


@playlists.each do |playlist|

  json.set! playlist.id do
    json.extract! playlist, :id, :title, :author_id, :img_path
    json.artist playlist.author.username
    json.current_user_owns current_user.playlists.include?(playlist)
    json.current_user_follows current_user.followed_playlists.include?(playlist)
    json.followers followers = playlist.followers.count

    json.song_ids playlist.songs.ids
  end
end
