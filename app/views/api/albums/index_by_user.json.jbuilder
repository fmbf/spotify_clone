@albums.each do |album|

  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :img_path

    # fture stuff

    json.song_ids album.songs.ids
    json.current_user_follows current_user.followed_albums.include?(album.id)
    json.followers album.followers.ids
  end

  # json.songs do
  #   @albums.each do |album|
  #     album.songs
  #   end
  # end
end
