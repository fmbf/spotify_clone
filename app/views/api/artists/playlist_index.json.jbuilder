
@playlists.each do |playlist|

  json.set! playlist.id do
    json.extract! playlist, :id, :title, :img_path, :author_id

    # fture stuff
    json.current_user_follows x = true # current_user.folows include? or playlist.followers.include?(current_user)
    json.followers followers = 948542

    json.song_ids playlist.songs.ids
  end
end
