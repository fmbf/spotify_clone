class Song < ApplicationRecord
  validates :title, :artist_id, :album_id, presence: true
  after_initialize :ensure_song_path, :ensure_img

  belongs_to :artist
  belongs_to :album

  has_many :playlist_memberships,
  foreign_key: :song_id,
  class_name: :PlaylistSong

  has_many :playlists,
  through: :playlist_memberships,
  source: :playlist

  private
  def ensure_song_path
  end

  def ensure_img
    # self.img_path ||= self.album.img_path
  end
end
