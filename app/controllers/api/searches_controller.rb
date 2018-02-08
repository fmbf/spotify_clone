class Api::SearchesController < ApplicationController

  def index
    @query = params[:query]

    @search_result = {
      'artists' => artist_index(@query),
      'albums' => album_index(@query),
      'songs' => song_index(@query),
      'playlists' => playlist_index(@query),
      'users' => user_index(@query),
      }
  end

  def artist_index(query_string)
    q = "%#{query_string.downcase}%"
    Artist.where('lower(name) LIKE ?', q).limit(8)
  end

  def album_index(query_string)
    q = "%#{query_string.downcase}%"
    Album.where('lower(title) LIKE ?', q).limit(8)
  end

  def song_index(query_string)
    q = "%#{query_string.downcase}%"
    Song.where('lower(title) LIKE ?', q).limit(8)
  end

  def playlist_index(query_string)
    q = "%#{query_string.downcase}%"
    Playlist.where('lower(title) LIKE ?', q).limit(8)
  end

  def user_index(query_string)
    q = "%#{query_string.downcase}%"
    User.where('lower(username) LIKE ?', q).limit(8)
  end

end
