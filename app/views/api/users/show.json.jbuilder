# json.partial! "api/users/user", user: @user


json.set! @user.id do
  json.extract! @user, :id, :username, :email, :img_path
end
