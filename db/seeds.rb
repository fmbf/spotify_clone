# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#========================================Users=======================================#
User.create(username: "bobby_tables", email: "robotables@tables.com", password: "tables")
User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
# User.create(username: "guest_user25", email: "demo_spotifyx@email.com", password: "password123")
User.create(username: "solo_han13", email: "falconflyer@space.com", password: "falcon")

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

#---------------------------------------Playlists----------------------------------------#
titles = [
  Faker::Dessert.variety.titleize, Faker::Dessert.topping.titleize, Faker::Dessert.flavor.titleize,
  Faker::Hipster.word.titleize, Faker::Book.title.titleize
]

User.all.each do |user|

  7.times do
    Playlist.create(title: titles.sample,
      img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
      description: Faker::Hipster.paragraph(1), author_id: user.id
    )
  end

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

#=====================================Albums=======================================#

Album.create(title: 'Discovery', artist_id: 4, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg')
Album.create(title: 'Human After All', artist_id: 4, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Humanafterall.jpg')
Album.create(title: 'Random Access Memories', artist_id: 4, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg')

Album.create(title: 'American IV: The Man Comes Around', artist_id: 9, img_path: 'https://upload.wikimedia.org/wikipedia/en/e/e0/AmericanIV.jpg')

Album.create(title: 'Giant Steps', artist_id: 10, img_path: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Coltrane_Giant_Steps.jpg')

Album.create(title: 'Continuum', artist_id: 11, img_path: 'https://upload.wikimedia.org/wikipedia/en/8/82/Continuum_%28album%29.png')

Album.create(title: 'Believe', artist_id: 12, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg')
Album.create(title: 'Purpose', artist_id: 12, img_path: 'https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png')

Album.create(title: 'Bitches Brew', artist_id: 13, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bitches_brew.jpg')
Album.create(title: 'Blue Period', artist_id: 13, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/01/Blue_period.jpg')

Album.create(title: 'Red', artist_id: 14, img_path: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png')
Album.create(title: '1989', artist_id: 14, img_path: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png')
Album.create(title: 'Reputation', artist_id: 14, img_path: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png')

Album.create(title: 'Thief - Single', artist_id: 15, img_path: 'https://i1.sndcdn.com/artworks-000151175619-7ach1w-t500x500.jpg')

Album.create(title: 'Worlds', artist_id: 16, img_path: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Porter_Robinson_-_Worlds.jpg')

Album.create(title: 'Loud', artist_id: 17, img_path: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png')
Album.create(title: 'Talk That Talk', artist_id: 17, img_path: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Rihanna_-_Talk_That_Talk_%28standard%29.png')
Album.create(title: 'Unapologetic', artist_id: 17, img_path: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Unapologetic_-_Rihanna.png')
Album.create(title: 'Anti', artist_id: 17, img_path: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png')

Album.create(title: 'Beauty Behind The Madness', artist_id: 18, img_path: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png')
Album.create(title: 'Starboy', artist_id: 18, img_path: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png')

Album.create(title: '21', artist_id: 1, img_path: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png')
Album.create(title: '25', artist_id: 1, img_path: 'https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png')

Album.create(title: 'Beyonce', artist_id: 2, img_path: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg')
Album.create(title: 'Lemonade', artist_id: 2, img_path: 'https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png')

Album.create(title: 'Unorthodox Jukebox', artist_id: 3, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/77/BrunoMarsUJAlbumCover.png')
Album.create(title: '24K Magic', artist_id: 3, img_path: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png')

Album.create(title: 'Nothing Was The Same', artist_id: 6, img_path: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Nothing_Was_the_Same_cover_2.png')
Album.create(title: 'Views', artist_id: 6, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg')
Album.create(title: 'More Life', artist_id: 6, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg')

# 20.times do
#   Artist.create(name: Faker::Hipster.word.titleize, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}")
# end

# Artist.create(name: '', img_path: '')

#=====================================Songs=======================================#

#---------------------------------------Daft_Punk----------------------------------------#
Song.create(title: 'One More Time', artist_id: 4, album_id: 1, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/01+One+More+Time.mp3')
Song.create(title: 'Aerodynamic', artist_id: 4, album_id: 1, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/02+Aerodynamic.mp3')
Song.create(title: 'Digital Love', artist_id: 4, album_id: 1, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/03+Digital+love.mp3')
Song.create(title: "Harder, Better, Faster, Stronger", artist_id: 4, album_id: 1, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/04+Harder%2C+Better%2C+Faster%2C+Stronger.mp3')
Song.create(title: 'Nightvision', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Superheroes', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'High Life', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Something About Us', artist_id: 4, album_id: 1, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/09+Something+About+Us.mp3')
Song.create(title: 'Voyager', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Verdis Quo', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Short Circuit', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Face to Face', artist_id: 4, album_id: 1, song_path: 'default_song_path')
Song.create(title: 'Too Long', artist_id: 4, album_id: 1, song_path: 'default_song_path')

Song.create(title: 'Human After All', artist_id: 4, album_id: 2, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/01+Human+After+All.mp3')
Song.create(title: 'The Prime Time of Your Life', artist_id: 4, album_id: 2, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/02+The+Prime+Time+Of+Your+Life.mp3')
Song.create(title: 'Robot Rock', artist_id: 4, album_id: 2, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/03+Robot+Rock.mp3')
Song.create(title: 'Steam Machine', artist_id: 4, album_id: 2, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/04+Steam+Machine.mp3')
Song.create(title: 'Make Love', artist_id: 4, album_id: 2, song_path: 'default_song_path')
Song.create(title: 'The Brainwasher', artist_id: 4, album_id: 2, song_path: 'default_song_path')
Song.create(title: 'Television Rules the Nation', artist_id: 4, album_id: 2, song_path: 'default_song_path')
Song.create(title: 'Technologic', artist_id: 4, album_id: 2, song_path: 'default_song_path')
Song.create(title: 'Emotion', artist_id: 4, album_id: 2, song_path: 'default_song_path')

Song.create(title: "Give Life Back to Music", artist_id: 4, album_id: 3, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/01+Give+Life+Back+to+Music.m4a')
Song.create(title: "Giorgio by Moroder", artist_id: 4, album_id: 3, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/03+Giorgio+by+Moroder.m4a')
Song.create(title: "Lose Yourself to Dance", artist_id: 4, album_id: 3, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/06+Lose+Yourself+to+Dance+(feat.+Pharrell+Williams).m4a")
Song.create(title: 'Get Lucky', artist_id: 4, album_id: 3, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/08+Get+Lucky+(feat.+Pharrell+Williams).m4a")
Song.create(title: "Doin' It Right", artist_id: 4, album_id: 3, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/12+Doin'+It+Right+(feat.+Panda+Bear).m4a")



songPaths = [
  'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/messages.mp3',
  'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/forma.mp3',
  'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/mmfg.mp3'
]



#  Fake Songs
# Artist.all.each do |artist|
#   artist.albums.each do |album|
#     5.times do
#       Follow.create(user_id: users.sample.id, followable_id: artist.id, followable_type: "Artist")
#       Song.create(title: Faker::Hipster.word.titleize, artist_id: artist.id, album_id: album.id, song_path: 'default_song_path')
#     end
#   end
# end


#  Fake Songs
# Follow.create(user_id: users.sample.id, followable_id: artist.id, followable_type: "Artist")
# Artist.all.each do |artist|
#   artist.albums.each do |album|
#     album.songs.each do |song|
#       song.update(song_path: "#{songPaths.sample}")
#     end
#   end
# end

#---------------------------------------Drake----------------------------------------#
Song.create(title: "Hold On, We're Going Home", artist_id: Artist.where(name: 'Drake'), album_id: Album.where(title: "Nothing Was The Same"), song_path: 'default_song_path')
Song.create(title: "Controlla", artist_id: Artist.where(name: 'Drake'), album_id: Album.where(title: "Views"), song_path: 'default_song_path')
Song.create(title: "One Dance", artist_id: Artist.where(name: 'Drake'), album_id: Album.where(title: "Views"), song_path: 'default_song_path')
Song.create(title: "Hotline Bling", artist_id: Artist.where(name: 'Drake'), album_id: Album.where(title: "Views"), song_path: 'default_song_path')
Song.create(title: "Fake Love", artist_id: Artist.where(name: 'Drake'), album_id: Album.where(title: "More Life"), song_path: 'default_song_path')


# Song.create(title: 'You da One', artist_id: 17, album_id:,  img_path: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Rihanna_-_Talk_That_Talk_%28standard%29.png')




#=====================================================================================#

#=====================================FOLLOWS=======================================#
# follow_types = [
#   "User", "Artist", "Album", "Song", "Playlist"
# ]

users = User.all

Artist.all.each do |artist|
  30.times do
    Follow.create(user_id: users.sample.id, followable_id: artist.id, followable_type: "Artist")
  end
end

Playlist.all.each do |playlist|
  30.times do
    Follow.create(user_id: users.sample.id, followable_id: playlist.id, followable_type: "Playlist")
  end
end

Song.all.each do |song|
  20.times do
    Follow.create(user_id: users.sample.id, followable_id: song.id, followable_type: "Song")
  end
end

User.all.each do |user|
  20.times do
    Follow.create(user_id: users.sample.id, followable_id: user.id, followable_type: "User")
  end
end

Album.all.each do |album|
  20.times do
    Follow.create(user_id: users.sample.id, followable_id: album.id, followable_type: "Album")
  end
end


#-------------------------------------------------------------------------------------#
