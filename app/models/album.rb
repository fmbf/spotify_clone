class Album < ApplicationRecord
  validates :title, :artist_id, presence: true
  after_initialize :ensure_img

  belongs_to :artist
  has_many :songs

  private
  def ensure_img
    self.img_path ||= "https://picsum.photos/200/200/?image=#{rand(100)}"
  end
end
