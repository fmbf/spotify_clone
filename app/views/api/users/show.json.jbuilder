json.partial! "api/users/user", user: @user


json.current_user_follows @user.followers.include?(current_user)
json.followers @user.followers.ids
json.follower_count @user.followers.count
