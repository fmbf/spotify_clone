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



#=====================================Artists=======================================#
Artist.create(name: 'Adele', img_path: 'https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg')
Artist.create(name: 'Beyonce', img_path: 'https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg')
Artist.create(name: 'Bruno Mars', img_path: 'https://www.billboard.com/files/media/Bruno-Mars-press-photo-Credit-Kai-Z-Feng-2016-012a-billboard-1548.jpg')
Artist.create(name: 'Drake', img_path: 'https://i.scdn.co/image/cb080366dc8af1fe4dc90c4b9959794794884c66')
Artist.create(name: 'Ed Sheeran', img_path: 'https://www.billboard.com/files/media/ed-sheeran-bb33-shoot-2015-billboard-01-650.jpg')
Artist.create(name: 'Johnny Cash', img_path: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/JohnnyCash1969.jpg')
Artist.create(name: 'Porter Robinson', img_path: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Porter_Robinson_2014_profile_pic.png')
Artist.create(name: 'Rihanna', img_path: 'https://static01.nyt.com/images/2015/10/25/t-magazine/25tmag-11well_rihanna-t_CA0/25tmag-11well_rihanna-t_CA0-articleLarge-v2.jpg')
Artist.create(name: 'ZAYN', img_path: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Zayn_Wiki.jpg')
Artist.create(name: 'The Weeknd', img_path: 'https://media.gq.com/photos/586fbf1ab730b94511591fad/master/w_1600/the-weeknd-0217-GQ-FEWE04-01-3x2.jpg')
# Artist.create(name: '', img_path: '')






#=====================================================================================#





#-------------------------------------------------------------------------------------#
