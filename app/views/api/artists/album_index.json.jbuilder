@albums.each do |album|

  json.set! album.id do
    json.extract! album, :id, :title, :img_path

    # fture stuff
    json.current_user_follows x = true # current_user.folows include? or album.followers.include?(current_user)
    json.followers followers = 948542

    json.song_ids album.songs.ids
  end
end
