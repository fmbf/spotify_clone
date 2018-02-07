# @albums.each do |album|
#
#   json.set! album.id do
#     json.extract! album, :id, :title, :img_path
#
#     # fture stuff
#
#     json.song_ids songs_ids = [12, 423, 491] #@album.songs.map { |song| song.id }
#     json.current_user_follows current_user.followed_albums.include?(album.id)
#     json.followers followers = 948542
#   end
# end
