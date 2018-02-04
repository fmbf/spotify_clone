@artists.each do |artist|

  json.set! artist.id do
    json.extract! artist, :id, :name, :img_path

    # fture stuff
    json.current_user_follows x = false; # current_user.folows include? or artist.followers.include?(current_user)

    json.album_ids albums_ids = [923, 401, 14] #@artist.albums.map { |song| song.id }
    json.song_ids songs_ids = [12, 423, 491] #@artist.songs.map { |song| song.id }
    json.followers followers = 948542

  end
end
