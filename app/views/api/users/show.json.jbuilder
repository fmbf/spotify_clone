json.partial! "api/users/user", user: @user
#
#
# json.set! @user.id do
#   json.extract! @user, :id, :username, :email, :img_path
#   json.playlists_ids playlists_ids = @user.playlists.map { |playlist| playlist.id }
# end

# json.users do
#   @users.each do |user|
#     json.set! user.id do
#       json.partial! "api/users/user", user: user
#     end
#   end
# end
