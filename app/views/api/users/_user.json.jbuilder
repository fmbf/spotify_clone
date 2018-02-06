json.extract! user, :id, :username, :img_path
json.playlists_ids user.playlists.ids


json.current_user_follows @user.followers.include?(current_user);
json.followers @user.followers.ids
json.follower_count @user.followers.count
