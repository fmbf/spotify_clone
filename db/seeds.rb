# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Playlist.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
PlaylistSong.destroy_all
Follow.destroy_all

#========================================Users=======================================#
User.create(username: "bobby_tables", email: "robotables@tables.com", password: "tables")
User.create(username: "solo_han13", email: "falconflyer@space.com", password: "falcon")

80.times do
  User.create(username: Faker::Name.unique.name.split(' ').join('_').downcase, email: "#{SecureRandom.urlsafe_base64}_#{Faker::Internet.email}", password: "password")
end
#=====================================================================================#

# "https://picsum.photos/200/200/?image=#{rand(1000)}"

#=====================================Playlists=======================================#


#=====================================Artists=======================================#
Artist.create(name: 'Adele', img_path: 'http://cdn.beggars.com.s3-eu-west-1.amazonaws.com/adele/wp-content/uploads/2015/10/01091631/adele-25-packshot.jpg')
Artist.create(name: 'Beyonce', img_path: 'https://i.scdn.co/image/673cd94546df0536954198867516fee18cee1605')
Artist.create(name: 'Bruno Mars', img_path: 'https://i.scdn.co/image/aa32d6d4ca2467974403518dd3ebfe8831c5ced1')
Artist.create(name: 'Calvin Harris', img_path: 'https://media.pitchfork.com/photos/5929907d9d034d5c69bf1018/1:1/w_300/cb29b49f.jpg')
Artist.create(name: 'Chromeo', img_path: 'http://www.atlanticrecords.com/sites/g/files/g2000003466/f/201401/Chromeo_ATLREC_ArtistCard300x300.jpg')
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
Artist.create(name: 'Skrillex', img_path: 'https://images.sk-static.com/images/media/profile_images/artists/3084961/huge_avatar')
Artist.create(name: 'Taylor Swift', img_path: 'https://stephaniemarksbooks.com/wp-content/uploads/2017/09/TaylorSwift.jpg')
Artist.create(name: 'Ookay', img_path: 'https://images.sk-static.com/images/media/profile_images/artists/5948934/huge_avatar')
Artist.create(name: 'Porter Robinson', img_path: 'https://storage.googleapis.com/media-2017.somethingwonderful.com/2017/01/4f25d927-artist-porter-robinson-square-500x500.jpg')
Artist.create(name: 'The Postal Service', img_path: 'https://media.pitchfork.com/photos/592995f2c0084474cd0bef86/1:1/w_300/4a9ce766.jpg')
Artist.create(name: 'Rihanna', img_path: 'https://static01.nyt.com/images/2015/10/16/nytnow/the-week-on-instagram-slide-H5V3/the-week-on-instagram-slide-H5V3-superJumbo.jpg')
Artist.create(name: 'The Weeknd', img_path: 'https://vignette.wikia.nocookie.net/the-weeknd/images/d/dd/Photo-1.jpg/revision/latest?cb=20170501130321')

#=====================================Albums=======================================#

Album.create(title: 'Discovery', artist_id: Artist.where(name: 'Daft Punk')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg')
Album.create(title: 'Human After All', artist_id: Artist.where(name: 'Daft Punk')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Humanafterall.jpg')
Album.create(title: 'Random Access Memories', artist_id: Artist.where(name: 'Daft Punk')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg')

Album.create(title: 'American IV: The Man Comes Around', artist_id: Artist.where(name: 'Johnny Cash'), img_path: 'https://upload.wikimedia.org/wikipedia/en/e/e0/AmericanIV.jpg')

Album.create(title: 'Giant Steps', artist_id: Artist.where(name: 'John Coltrane'), img_path: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Coltrane_Giant_Steps.jpg')

Album.create(title: 'Continuum', artist_id: Artist.where(name: 'John Mayer')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/8/82/Continuum_%28album%29.png')

Album.create(title: 'Fancy Footwork', artist_id: Artist.where(name: 'Chromeo')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/1/16/Chromeo_-_Fancy_Footwork.png')


Album.create(title: 'Believe', artist_id: Artist.where(name: 'Justin Bieber')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/01/Believe-JB-Album.jpg')
Album.create(title: 'Purpose', artist_id: Artist.where(name: 'Justin Bieber')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png')

Album.create(title: 'Money Sucks, Friends Rule', artist_id: Artist.where(name: 'Dillon Francis')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Money_Sucks%2C_Friends_Rule_final.jpg')

Album.create(title: 'Bitches Brew', artist_id: Artist.where(name: 'Miles Davis')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bitches_brew.jpg')
Album.create(title: 'Blue Period', artist_id: Artist.where(name: 'Miles Davis')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/0/01/Blue_period.jpg')

Album.create(title: 'Red', artist_id: Artist.where(name: 'Taylor Swift')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png')
Album.create(title: '1989', artist_id: Artist.where(name: 'Taylor Swift')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png')
# Album.create(title: 'Reputation', artist_id: 14, img_path: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png')

Album.create(title: 'Thief - Single', artist_id: Artist.where(name: 'Ookay')[0].id, img_path: 'https://i1.sndcdn.com/artworks-000151175619-7ach1w-t500x500.jpg')

Album.create(title: 'Worlds', artist_id: Artist.where(name: 'Porter Robinson')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Porter_Robinson_-_Worlds.jpg')

Album.create(title: 'Loud', artist_id: Artist.where(name: 'Rihanna')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png')
Album.create(title: 'Talk That Talk', artist_id: Artist.where(name: 'Rihanna')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Rihanna_-_Talk_That_Talk_%28standard%29.png')
Album.create(title: 'Unapologetic', artist_id: Artist.where(name: 'Rihanna')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Unapologetic_-_Rihanna.png')
Album.create(title: 'Anti', artist_id: Artist.where(name: 'Rihanna')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/3/32/Rihanna_-_Anti.png')

Album.create(title: 'Beauty Behind The Madness', artist_id: Artist.where(name: 'The Weeknd')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png')
Album.create(title: 'Starboy', artist_id: Artist.where(name: 'The Weeknd')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png')

Album.create(title: '21', artist_id: Artist.where(name: 'Adele')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png')
Album.create(title: '25', artist_id: Artist.where(name: 'Adele')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png')

Album.create(title: 'Beyonce', artist_id: Artist.where(name: 'Beyonce')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg')
Album.create(title: 'Lemonade', artist_id: Artist.where(name: 'Beyonce')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png')

Album.create(title: 'Unorthodox Jukebox', artist_id: Artist.where(name: 'Bruno Mars')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/77/BrunoMarsUJAlbumCover.png')
Album.create(title: '24K Magic', artist_id: Artist.where(name: 'Bruno Mars')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png')

Album.create(title: 'Nothing Was The Same', artist_id: Artist.where(name: 'Drake')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Nothing_Was_the_Same_cover_2.png')
Album.create(title: 'Views', artist_id: Artist.where(name: 'Drake')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg')
Album.create(title: 'More Life', artist_id: Artist.where(name: 'Drake')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/7/70/Drake_-_More_Life_cover.jpg')

Album.create(title: '18 Months', artist_id: Artist.where(name: 'Calvin Harris')[0].id, img_path: "https://upload.wikimedia.org/wikipedia/en/d/df/Calvin_Harris_-_18_Months.png")

Album.create(title: 'Bangarang', artist_id: Artist.where(name: 'Skrillex')[0].id, img_path: 'https://is4-ssl.mzstatic.com/image/thumb/Music/3d/5e/f8/mzi.dsikpckg.jpg/268x0w.jpg')

Album.create(title: 'Give Up', artist_id: Artist.where(name: 'The Postal Service')[0].id, img_path: 'https://images-na.ssl-images-amazon.com/images/I/41VRTUJzwPL._SY300_QL70_.jpg')

Album.create(title: 'Jungle Rules', artist_id: Artist.where(name: 'French Montana')[0].id, img_path: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Jungle_Rules_by_French_Montana.jpg')


Album.create(title: 'Multiply', artist_id: Artist.where(name: 'Ed Sheeran')[0].id, img_path: 'https://images.rapgenius.com/d7b3e41b31e03a7276fae2ed623c22f8.640x640x1.jpg')



#
# 20.times do
#   Artist.create(name: Faker::Hipster.word.titleize, img_path: "https://picsum.photos/200/200/?image=#{rand(100)}")
# end

# Artist.create(name: '', img_path: '')

#=====================================Songs=======================================#d

songPaths = [
  'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/messages.mp3',
]

default_song_path = 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/messages.mp3'

#---------------------------------------Daft_Punk----------------------------------------#
Song.create(title: 'One More Time', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/01+One+More+Time.mp3')
Song.create(title: 'Aerodynamic', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/02+Aerodynamic.mp3')
Song.create(title: 'Digital Love', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/03+Digital+love.mp3')
Song.create(title: "Harder, Better, Faster, Stronger", artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/04+Harder%2C+Better%2C+Faster%2C+Stronger.mp3')
Song.create(title: 'Something About Us', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/09+Something+About+Us.mp3')
Song.create(title: 'Voyager', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/10+Voyager.mp3')
Song.create(title: 'Face to Face', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/13+Face+to+Face.mp3')
Song.create(title: 'Too Long', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Discovery")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/14+Too+Long.mp3')

Song.create(title: 'Human After All', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Human After All")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/01+Human+After+All.mp3')
Song.create(title: 'The Prime Time of Your Life', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Human After All")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/02+The+Prime+Time+Of+Your+Life.mp3')
Song.create(title: 'Robot Rock', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Human After All")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/03+Robot+Rock.mp3')
Song.create(title: 'Steam Machine', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Human After All")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/04+Steam+Machine.mp3')


Song.create(title: "Give Life Back to Music", artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Random Access Memories")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/01+Give+Life+Back+to+Music.m4a')
Song.create(title: "Giorgio by Moroder", artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Random Access Memories")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/03+Giorgio+by+Moroder.m4a')
Song.create(title: "Lose Yourself to Dance", artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Random Access Memories")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/06+Lose+Yourself+to+Dance+(feat.+Pharrell+Williams).m4a")
Song.create(title: 'Get Lucky', artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Random Access Memories")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/08+Get+Lucky+(feat.+Pharrell+Williams).m4a")
Song.create(title: "Doin' It Right", artist_id: Artist.where(name: 'Daft Punk')[0].id, album_id: Album.where(title: "Random Access Memories")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/randomaccessmemories/12+Doin'+It+Right+(feat.+Panda+Bear).m4a")


#---------------------------------------Drake----------------------------------------#
Song.create(title: "Hold On, We're Going Home", artist_id: Artist.where(name: 'Drake')[0].id, album_id: Album.where(title: "Nothing Was The Same")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Drake/Hold+On+Were+Going+Home+(feat.+Majid+Jordan).mp3")
Song.create(title: "Controlla", artist_id: Artist.where(name: 'Drake')[0].id, album_id: Album.where(title: "Views")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Drake/Controlla.mp3')
Song.create(title: "One Dance", artist_id: Artist.where(name: 'Drake')[0].id, album_id: Album.where(title: "Views")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Drake/One+Dance.mp3")
Song.create(title: "Hotline Bling", artist_id: Artist.where(name: 'Drake')[0].id, album_id: Album.where(title: "Views")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Drake/Hotline+Bling.mp3")
Song.create(title: "Fake Love", artist_id: Artist.where(name: 'Drake')[0].id, album_id: Album.where(title: "More Life")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Drake/Fake+Love.mp3")

#---------------------------------------Bruno----------------------------------------#
Song.create(title: '24K Magic', artist_id: Artist.where(name: 'Bruno Mars')[0].id, album_id: Album.where(title: "24K Magic")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Bruno/24K+Magic.mp3')
Song.create(title: 'Uptown Funk', artist_id: Artist.where(name: 'Bruno Mars')[0].id, album_id: Album.where(title: "24K Magic")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Bruno/Uptown+Funk+(feat.+Mark+Ronson).mp3")

Song.create(title: 'Locked Out Of Heaven', artist_id: Artist.where(name: 'Bruno Mars')[0].id, album_id: Album.where(title: "Unorthodox Jukebox")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Bruno/Bruno+Mars+Locked+Out+Of+Heaven.mp3')

#---------------------------------------Swift----------------------------------------#
Song.create(title: 'I Knew You Were Trouble', artist_id: Artist.where(name: 'Taylor Swift')[0].id, album_id: Album.where(title: "Red")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/T+Swift/Taylor+Swift+-+I+Knew+You+Were+Trouble.mp3")
Song.create(title: 'Shake It Off', artist_id: Artist.where(name: 'Taylor Swift')[0].id, album_id: Album.where(title: "1989")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/T+Swift/Taylor+Swift+++Shake+It+Off.mp3")
Song.create(title: 'Bad Blood', artist_id: Artist.where(name: 'Taylor Swift')[0].id, album_id: Album.where(title: "1989")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/T+Swift/Bad+Blood.mp3")



#---------------------------------------Riri----------------------------------------#
# Album.create(title: 'Only Girl In The World', artist_id: Artist.where(name: 'Rihanna')[0].id, song_path: 'songPaths.sample')
# Album.create(title: 'Drink To That', artist_id: Artist.where(name: 'Rihanna')[0].id, song_path: 'songPaths.sample')



#---------------------------------------Calvin----------------------------------------#
Song.create(title: 'Bounce', artist_id: Artist.where(name: 'Calvin Harris')[0].id, album_id: Album.where(title: "18 Months")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/18+Months/02+Bounce+(feat.+Kelis)+%5BRadio+Edit%5D.mp3")
Song.create(title: 'Feel So Close', artist_id: Artist.where(name: 'Calvin Harris')[0].id, album_id: Album.where(title: "18 Months")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/18+Months/03+Feel+So+Close+(Radio+Edit).mp3")
Song.create(title: 'We Found Love', artist_id: Artist.where(name: 'Calvin Harris')[0].id, album_id: Album.where(title: "18 Months")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/18+Months/04+We+Found+Love+(feat.+Rihanna).mp3")
Song.create(title: 'Sweet Nothing (feat. Florence Welch)', artist_id: Artist.where(name: 'Calvin Harris')[0].id, album_id: Album.where(title: "18 Months")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/18+Months/10+Sweet+Nothing+(feat.+Florence+Welch).mp3")

#---------------------------------------Adele----------------------------------------#
Song.create(title: 'Rolling In The Deep', artist_id: Artist.where(name: 'Adele')[0].id, album_id: Album.where(title: "21")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/21/01+Rolling+In+The+Deep.mp3")
Song.create(title: 'Rumour Has It', artist_id: Artist.where(name: 'Adele')[0].id, album_id: Album.where(title: "21")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/21/02+Rumor+Has+It.mp3")
Song.create(title: 'Set Fire To The Rain', artist_id: Artist.where(name: 'Adele')[0].id, album_id: Album.where(title: "21")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/21/05+Set+Fire+To+The+Rain.mp3")

Song.create(title: 'Hello', artist_id: Artist.where(name: 'Adele')[0].id, album_id: Album.where(title: "25")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/25/Hello.mp3")
Song.create(title: 'Send My Love (To Your New Lover)', artist_id: Artist.where(name: 'Adele')[0].id, album_id: Album.where(title: "25")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/25/Send+My+Love+(To+Your+New+Lover).mp3")

#---------------------------------------Beyonce----------------------------------------#
Song.create(title: 'Drunk In Love', artist_id: Artist.where(name: 'Beyonce')[0].id, album_id: Album.where(title: "Beyonce")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Beyonce/Beyonce+Drunk+In+Love.mp3")
Song.create(title: 'Blow', artist_id: Artist.where(name: 'Beyonce')[0].id, album_id: Album.where(title: "Beyonce")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Beyonce/Beyonce+-+Blow.mp3")

Song.create(title: 'Formation', artist_id: Artist.where(name: 'Beyonce')[0].id, album_id: Album.where(title: "Lemonade")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Beyonce/Beyonce+-+Formation.mp3")

#---------------------------------------John Mayer----------------------------------------#
Song.create(title: 'Waiting On The World To Change', artist_id: Artist.where(name: 'John Mayer')[0].id, album_id: Album.where(title: "Continuum")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Continuum/01+Waiting+On+The+World+To+Change.m4a')
Song.create(title: 'Gravity', artist_id: Artist.where(name: 'John Mayer')[0].id, album_id: Album.where(title: "Continuum")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Continuum/04+Gravity.m4a')
Song.create(title: 'Vultures', artist_id: Artist.where(name: 'John Mayer')[0].id, album_id: Album.where(title: "Continuum")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Continuum/06+Vultures.m4a')

#---------------------------------------Skrillex----------------------------------------#
Song.create(title: 'Bangarang', artist_id: Artist.where(name: 'Skrillex')[0].id, album_id: Album.where(title: "Bangarang")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Bangarang/02+Bangarang+feat.+Sirah+(Original+Mix).mp3")
Song.create(title: 'Right In', artist_id: Artist.where(name: 'Skrillex')[0].id, album_id: Album.where(title: "Bangarang")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Bangarang/01+Right+In+(Original+Mix).mp3")

#---------------------------------------Chromeo----------------------------------------#
Song.create(title: 'Tenderoni', artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/02+Tenderoni.mp3')
Song.create(title: 'Fancy Footwork', artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/03+Fancy+Footwork.mp3')
Song.create(title: "Bonafied Lovin' (Tough Guys)", artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/04+Bonafied+Lovin'+(Tough+Guys).mp3")
Song.create(title: "My Girl Is Calling Me (A Liar)", artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/05+My+Girl+Is+Calling+Me+(A+Liar).mp3")
Song.create(title: "Momma's Boy", artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/08+Momma's+Boy.mp3")
Song.create(title: "Call Me Up", artist_id: Artist.where(name: 'Chromeo')[0].id, album_id: Album.where(title: "Fancy Footwork")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Fancy+Footwork/09+Call+Me+Up.mp3")

#---------------------------------------Porter----------------------------------------#
Song.create(title: 'Divinity', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/01+Divinity+(feat.+Amy+Millan).m4a")
Song.create(title: 'Sad Machine', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/02+Sad+Machine.m4a')
Song.create(title: 'Flicker', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/04+Flicker.m4a")
Song.create(title: 'Fresh Static Snow', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/05+Fresh+Static+Snow.m4a")
Song.create(title: 'Natural Light', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/08+Natural+Light.m4a')
# Song.create(title: 'Lion Hearted', artist_id: Artist.where(name: 'Porter Robinson')[0].id, album_id: Album.where(title: "Worlds")[0].id,  song_path: 'https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Worlds/02+Sad+Machine.m4a')

#---------------------------------------Sheeran----------------------------------------#
Song.create(title: 'Shape Of You', artist_id: Artist.where(name: 'Ed Sheeran')[0].id, album_id: Album.where(title: "Multiply")[0].id,  song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/sheeran/Ed+Sheeran+-+Shape+Of+You.mp3")


#---------------------------------------Postal----------------------------------------#
Song.create(title: 'The District Sleeps Alone Tonight', artist_id: Artist.where(name: 'The Postal Service')[0].id, album_id: Album.where(title: "Give Up")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Give+Up/01+The+District+Sleeps+Alone+Tonight.mp3")
Song.create(title: 'Such Great Heights', artist_id: Artist.where(name: 'The Postal Service')[0].id, album_id: Album.where(title: "Give Up")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Give+Up/02+Such+Great+Heights.mp3")
Song.create(title: 'Natural Anthem', artist_id: Artist.where(name: 'The Postal Service')[0].id, album_id: Album.where(title: "Give Up")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Give+Up/10+Natural+Anthem.mp3")


#---------------------------------------Riri----------------------------------------#
Song.create(title: 'S & M', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Loud")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/LOUD/01+S%26M.mp3")
Song.create(title: 'Cheers (Drink To That)', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Loud")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/LOUD/03+Cheers+(Drink+To+That).mp3")
Song.create(title: 'Only Girl (In The World)', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Loud")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/LOUD/05+Only+Girl+(In+The+World).mp3")

Song.create(title: 'You Da One', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Talk That Talk")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Talk+That+Talk+(Deluxe+Edition)/01+You+da+One.mp3")
Song.create(title: 'Where Have You Been', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Talk That Talk")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Talk+That+Talk+(Deluxe+Edition)/02+Where+Have+You+Been.mp3")
Song.create(title: 'Cockiness (Love It)', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Talk That Talk")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Talk+That+Talk+(Deluxe+Edition)/05+Cockiness+(Love+It).mp3")

Song.create(title: 'Fresh Off The Runway', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Unapologetic")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Unapologetic/01+Fresh+Off+The+Runway.mp3")
Song.create(title: 'Diamonds', artist_id: Artist.where(name: 'Rihanna')[0].id, album_id: Album.where(title: "Unapologetic")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Unapologetic/02+Diamonds.mp3")

#---------------------------------------French----------------------------------------#
Song.create(title: 'Unforgettable (ft. Swae lee)', artist_id: Artist.where(name: 'French Montana')[0].id, album_id: Album.where(title: "Jungle Rules")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/French/French+Montana+ft.+(Swae+lee)+-+Unforgettable.mp3")


#---------------------------------------Dill----------------------------------------#
Song.create(title: 'Get Low feat. DJ Snake', artist_id: Artist.where(name: 'Dillon Francis')[0].id, album_id: Album.where(title: "Money Sucks, Friends Rule")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Money+Sucks%2C+Friends+Rule/Get+Low+feat.+DJ+Snake.mp3")
Song.create(title: "I Can't Take It", artist_id: Artist.where(name: 'Dillon Francis')[0].id, album_id: Album.where(title: "Money Sucks, Friends Rule")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Money+Sucks%2C+Friends+Rule/I+Can't+Take+It.mp3")
Song.create(title: 'Not Butter', artist_id: Artist.where(name: 'Dillon Francis')[0].id, album_id: Album.where(title: "Money Sucks, Friends Rule")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Money+Sucks%2C+Friends+Rule/Not+Butter.mp3")

#---------------------------------------Bieber----------------------------------------#

Song.create(title: 'Sorry', artist_id: Artist.where(name: 'Justin Bieber')[0].id, album_id: Album.where(title: "Purpose")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Purpose/Justin+Bieber+-+Sorry.mp3")


#---------------------------------------Weeknd----------------------------------------#
Song.create(title: 'Often', artist_id: Artist.where(name: 'The Weeknd')[0].id, album_id: Album.where(title: "Beauty Behind The Madness")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/The+Wk/Often.mp3")
Song.create(title: 'The Hills', artist_id: Artist.where(name: 'The Weeknd')[0].id, album_id: Album.where(title: "Beauty Behind The Madness")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/The+Wk/The+Hills.mp3")
Song.create(title: "Can't Feel My Face", artist_id: Artist.where(name: 'The Weeknd')[0].id, album_id: Album.where(title: "Beauty Behind The Madness")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/The+Wk/The+Weeknd+-+Can%E2%80%99t+Feel+My+Face.mp3")

Song.create(title: "Starboy", artist_id: Artist.where(name: 'The Weeknd')[0].id, album_id: Album.where(title: "Starboy")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/The+Wk/The+Weeknd+feat+Daft+Punk+-+Starboy.mp3")
Song.create(title: "I Feel It Coming", artist_id: Artist.where(name: 'The Weeknd')[0].id, album_id: Album.where(title: "Starboy")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/The+Wk/The+Weeknd+-+I+Feel+It+Coming+ft.+Daft+Punk.mp3")


Song.create(title: "Thief", artist_id: Artist.where(name: 'Ookay')[0].id, album_id: Album.where(title: "Thief - Single")[0].id, song_path: "https://s3-us-west-1.amazonaws.com/fmbfspotifyclone/Ookay/Ookay+-+Thief.mp3")

#---------------------------------------User_1---------------------------------------#
Playlist.create(title: 'Love Songs', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'the staple of every library', author_id: User.where(username: 'bobby_tables')[0].id)
Playlist.create(title: 'Bangers', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'oldies but awesome', author_id: User.where(username: 'bobby_tables')[0].id)
Playlist.create(title: 'Pool Party', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'warm and fuzzy', author_id: User.where(username: 'bobby_tables')[0].id)
Playlist.create(title: 'Rainy Day Jams', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'drip drop', author_id: User.where(username: 'bobby_tables')[0].id)
Playlist.create(title: 'Day At The Beach', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'Summer is here!', author_id: User.where(username: 'bobby_tables')[0].id)
Playlist.create(title: 'Workout', img_path: "https://picsum.photos/200/200/?image=#{rand(100)}", description: 'For da gym!', author_id: User.where(username: 'bobby_tables')[0].id)


#---------------------------------------Playlists----------------------------------------#
# titles = [
#   Faker::Dessert.variety.titleize, Faker::Dessert.topping.titleize, Faker::Dessert.flavor.titleize,
#   Faker::Hipster.word.titleize, Faker::Book.title.titleize
# ]
#
# User.all.each do |user|
#   unless user.id == 1
#     5.times do
#       Playlist.create(title: titles.sample,
#         img_path: "https://picsum.photos/200/200/?image=#{rand(100)}",
#         description: Faker::Hipster.paragraph(1), author_id: user.id
#       )
#     end
#   end
#
# end
#
#
# Playlist.all.each do |playlist|
#   songId = Song.all.sample.id
#   PlaylistSong.new(song_id: songId, playlist_id: playlist.id)
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

user = User.first
Artist.all.each do |artist|
  Follow.create(user_id: User.first.id, followable_id: artist.id, followable_type: "Artist") unless user.followed_artists.include?(artist)
end

Album.all.each do |album|
  Follow.create(user_id: User.first.id, followable_id: album.id, followable_type: "Album") unless user.followed_albums.include?(album)
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
