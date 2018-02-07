json.partial! "api/users/user", user: @user

json.followers current_user.followers.ids
json.follower_count current_user.followers.count
