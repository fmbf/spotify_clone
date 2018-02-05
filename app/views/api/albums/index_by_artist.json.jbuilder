@albums.each do |album|

  json.set! album.id do
    json.extract! album, :id, :title, :img_path

    # fture stuff

    json.song_ids songs_ids = [12, 423, 491] #@album.songs.map { |song| song.id }
    json.current_user_follows x = true # current_user.folows include? or album.followers.include?(current_user)
    json.followers followers = 948542
  end
end
