<h1 align="center"><strong>Spotify Mini</strong></h1>
<div align="center">
   : 🎵 :  🔥 :  🎵 :
   <br/>
</div>
<br/>
<div align="center">
  Built on
  <code>Ruby on Rails</code>
  <code>React.js</code>
  <code>Redux</code>
  <code>PostgreSQL</code>
  and
  <code>AWS storage</code>
</div>

<br/>

<p align="center">
  <img src="https://media.giphy.com/media/l3diTgXwccE4BKIAU/giphy.gif">
</p>


<center>Spotify Mini is a simple clone built on Rails, React.js, Redux, PostgreSQL and AWS storage. It lets users search, discover, and listen
to beautiful music.</center>
<h1 align="center"><strong>Features</strong></h1>

- __Secure:__ custom-rolled auth using `BCrypt::Password` password hashing algorithm
and `SecureRandom.base64` session key in HTTP cookies

- __Searchable:__ Search the PostgreSQL Database full of amazing artists, albums, playlists and users from any view in the app.

- __Polymorphic:__ Flexible `followable` format allows a User to connect to multiple models through a single table.

- __adorable:__ redesigned aesthetic based around a minimalist white design


<p align="center">
  <img src="https://media.giphy.com/media/3o6nV2x8uiJq0P7WcU/giphy.gif">
</p>

[Live Demo](https://spotify-mini.herokuapp.com/)


## Project Design
Spotify Mini was designed over a 10 day period in February 2018. Designed
from the bottom up, starting from a list of Minimum Viable Products (MVPs), sample
component hierarchy, routes, sample state, DB schema, and wireframes before any
code was written.
Each MVP was tracked through GitHub Issues and followed up through delivery deadline.

## Technologies
Spotify Mini's backend is built using `Ruby on Rails 5.0`💎 connected to `PostgreSQL` for
database management. Front to Backend communication achieved via `jQuery AJAX` requests.
All responses are rendered as `JSON` back to the front-end to be processed by `React`, a `JavaScript` library for building
user interfaces developed by Facebook. The `React` / `Redux` combination allows for a dynamically responsive UX

## Future Plans
  + More diverse seed data:
  + Additional Browsing options, such as genres and moods.
  + Use React Native to develop Spotify Mini as a mobile app in the App store.
  + Fixes to bugs and other User Interface improvements.
