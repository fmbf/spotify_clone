# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "bobby_tables", email: "robtables@tables.com", password_digest: "tables")
User.create(username: "solo_han", email: "falconflyer@space.com", password_digest: "password")
User.create(username: "guest_user25", email: "demo_spotifyx@email.com", password_digest: "password123")


Playlist.create(title: 'love songs', description: 'the staple of every library', author_id: 1)
Playlist.create(title: 'rock stuff', description: 'oldies but awesome', author_id: 1)
Playlist.create(title: 'christmas party', description: 'warm and fuzzy', author_id: 1)
