class Playlist < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, length: { maximum: 50 }
  validates :description, length: { maximum: 100 }
  after_initialize :ensure_img


  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :song_members,
  foreign_key: :playlist_id,
  class_name: :PlaylistSong

  has_many :songs,
  through: :song_members,
  source: :song

  private
  def ensure_img
    self.img_path ||= "https://picsum.photos/200/200/?image=#{rand(100)}"
  end
end
