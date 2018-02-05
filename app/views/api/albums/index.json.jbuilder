@albums.each do |album|

  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :img_path
    json.artist album.artist.name
    # fture stuff
    json.current_user_follows x = true; # album.followers.include?(current_user)
    json.followers followers = 948542

    json.song_ids album.songs.ids
  end
end
