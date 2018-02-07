@artists.each do |artist|

  json.set! artist.id do
    json.extract! artist, :id, :name, :img_path

    # fture stuff

    json.song_ids artist.songs.ids
    json.current_user_follows current_user.followed_artists.include?(artist.id)
    json.followers artist.followers.ids
  end
end



# FROM USER #
# json.extract! user, :id, :username, :img_path
# json.playlists_ids user.playlists.ids
# json.artists_ids user.followed_artists.ids
# json.albums_ids user.followed_albums.ids
# json.songs_ids user.followed_songs.ids
# json.followers user.followers.ids
# json.follower_count user.followers.count
