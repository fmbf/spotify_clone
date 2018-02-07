

@playlists.each do |playlist|

  json.set! playlist.id do
    json.extract! playlist, :id, :title, :description, :img_path
    json.author_id playlist.author.id
    json.author playlist.author.username

    # fture stuff
    json.current_user_owns playlist.author == current_user
    json.current_user_follows current_user.followed_playlists.include?(playlist);


    json.songs_ids songs_ids = [12, 423, 491] #@playlist.songs.map { |song| song.id }
    json.followers followers = 948542

  end
end



# json.playlists do
#   @playlists.each do |playlist|
#
#     json.set! playlist.id do
#       json.extract! playlist, :id, :title, :img_path
#
#       # fture stuff
#       json.current_user_owns playlist.author == current_user
#       json.current_user_follows x = false; # playlist.followers.include?(current_user)
#
#       json.songs_ids songs_ids = [12, 423, 491] #@playlist.songs.map { |song| song.id }
#       json.followers followers = 948542
#
#     end
#   end
# end

# json.playlists @playlists
