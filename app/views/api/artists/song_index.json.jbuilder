@songs.each do |song|

  json.set! song.id do
    json.extract! song, :id, :title, :song_path

    # fture stuff

    # json.song_ids songs_ids = [12, 423, 491] #@song.songs.map { |song| song.id }
    json.current_user_follows x = true # current_user.folows include? or song.followers.include?(current_user)
    # json.followers followers = 948542
  end
end
