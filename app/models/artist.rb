class Artist < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { maximum: 50 }

  after_initialize :ensure_img


  private
  def ensure_img
    self.img_path ||= "https://picsum.photos/200/200/?image=#{rand(100)}"
  end
end
