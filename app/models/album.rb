class Album < ApplicationRecord
  validates :title, :artist_id, presence: true
  after_initialize :ensure_img

  belongs_to :artist
  has_many :songs


  has_many :followships, as: :followable,
  foreign_key: :followable_id,
  class_name: :Follow

  has_many :followers,
  through: :followships,
  source: :user

  private
  def ensure_img
    self.img_path ||= "https://picsum.photos/200/200/?image=#{rand(100)}"
  end
end
