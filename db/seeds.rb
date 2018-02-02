# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#========================================Users=======================================#
User.create(username: "bobby_tables", email: "robtables@tables.com", password: "tables")
User.create(username: "solo_han", email: "falconflyer@space.com", password: "password")
User.create(username: "guest_user25", email: "demo_spotifyx@email.com", password: "password123")
#=====================================================================================#


# random = rand(1000)

# "https://picsum.photos/200/200/?image=#{rand(1000)}"

#=====================================Playlists=======================================#
#---------------------------------------User_1---------------------------------------#
Playlist.create(title: 'love songs', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'the staple of every library', author_id: 1)
Playlist.create(title: 'rock stuff', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'oldies but awesome', author_id: 1)
Playlist.create(title: 'christmas party', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'warm and fuzzy', author_id: 1)

Playlist.create(title: 'Day At The Beach', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'Summer is here!', author_id: 1)
Playlist.create(title: 'Rainy Day Jams', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'drip drop', author_id: 1)
Playlist.create(title: 'Workout', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'For da gym!', author_id: 1)

#---------------------------------------User_2----------------------------------------#
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 2)

#---------------------------------------User_3----------------------------------------#
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 3)

#---------------------------------------User_4----------------------------------------#
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)
Playlist.create(title: Faker::Book.title, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: Faker::Hipster.paragraph(1), author_id: 4)



#=====================================================================================#





#-------------------------------------------------------------------------------------#
