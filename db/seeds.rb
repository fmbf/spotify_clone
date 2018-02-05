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
User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
User.create(username: "guest_user25", email: "demo_spotifyx@email.com", password: "password123")

30.times do
  User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
end
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

7.times do
  Playlist.create(title: Faker::Book.title,
    img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
    description: Faker::Hipster.paragraph(1), author_id: 1)
end

#---------------------------------------User_2----------------------------------------#
12.times do
  Playlist.create(title: Faker::Book.title,
    img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
    description: Faker::Hipster.paragraph(1), author_id: 2)
end
#---------------------------------------User_3----------------------------------------#
12.times do
  Playlist.create(title: Faker::Book.title,
    img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
    description: Faker::Hipster.paragraph(1),
    author_id: 3)
end
#---------------------------------------User_4----------------------------------------#
12.times do
  Playlist.create(title: Faker::Book.title,
    img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
    description: Faker::Hipster.paragraph(1), author_id: 4)
end

#=====================================Artists=======================================#
Artist.create(name: 'Adele', img_path: 'http://cdn.beggars.com.s3-eu-west-1.amazonaws.com/adele/wp-content/uploads/2015/10/01091631/adele-25-packshot.jpg')
Artist.create(name: 'Beyonce', img_path: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605')
Artist.create(name: 'Bruno Mars', img_path: 'https://i.scdn.co/image/aa32d6d4ca2467974403518dd3ebfe8831c5ced1')
Artist.create(name: 'Daft Punk', img_path: 'https://yt3.ggpht.com/a-/AK162_4YZ0GmJIn1KfAHHs_XUxuZbfFWHxkdb6nl9w=s900-mo-c-c0xffffffff-rj-k-no')
Artist.create(name: 'Dillon Francis', img_path: 'https://i.scdn.co/image/1dfa207083157e1cd10767bd6e80e0dbcbb4609e')
Artist.create(name: 'Drake', img_path: 'https://i.scdn.co/image/cb080366dc8af1fe4dc90c4b9959794794884c66')
Artist.create(name: 'Ed Sheeran', img_path: 'https://images.shazam.com/artistart/a40769350_s400.jpg')
Artist.create(name: 'French Montana', img_path: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/FM_PRESS03-A.png')
Artist.create(name: 'Johnny Cash', img_path: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/JohnnyCash1969.jpg')
Artist.create(name: 'John Coltrane', img_path: 'http://www.bluenote.com/cdn/mceuploads/artists/john-coltrane.jpg')
Artist.create(name: 'John Mayer', img_path: 'https://pbs.twimg.com/profile_images/822251283406934016/pQC2vwZT_400x400.jpg')
Artist.create(name: 'Justin Bieber', img_path: 'https://images.shazam.com/artistart/a40543550_s400.jpg')
Artist.create(name: 'Miles Davis', img_path: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Miles_Davis_by_Palumbo.jpg')
Artist.create(name: 'Taylor Swift', img_path: 'https://stephaniemarksbooks.com/wp-content/uploads/2017/09/TaylorSwift.jpg')
Artist.create(name: 'Ookay', img_path: 'https://pbs.twimg.com/profile_images/952678983509852160/ncRe6CJb.jpg')
Artist.create(name: 'Porter Robinson', img_path: 'https://storage.googleapis.com/media-2017.somethingwonderful.com/2017/01/4f25d927-artist-porter-robinson-square-500x500.jpg')
Artist.create(name: 'Rihanna', img_path: 'https://static01.nyt.com/images/2015/10/16/nytnow/the-week-on-instagram-slide-H5V3/the-week-on-instagram-slide-H5V3-superJumbo.jpg')
Artist.create(name: 'The Weeknd', img_path: 'https://vignette.wikia.nocookie.net/the-weeknd/images/d/dd/Photo-1.jpg/revision/latest?cb=20170501130321')


# 20.times do
#   Artist.create(name: Faker::Hipster.word.titleize, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}")
# end

# Artist.create(name: '', img_path: '')

#=====================================Albums=======================================#





#=====================================================================================#





#-------------------------------------------------------------------------------------#
