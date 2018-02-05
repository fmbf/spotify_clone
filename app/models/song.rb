class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true
  after_initialize :ensure_song_path


  belongs_to :artist
  belongs_to :album
  # belongs_to :playlist, optional: true

  private
  def ensure_song_path
  end
end
