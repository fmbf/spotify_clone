class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token, :ensure_img

  attr_reader :password

  has_many :playlists,
  foreign_key: :author_id,
  class_name: :Playlist

  # Polymorphic Follow
  has_many :followed,
  foreign_key: :user_id,
  class_name: :Follow

  has_many :followed_users,
  through: :followed,
  source: :followable,
  source_type: 'User'

  has_many :followed_artists,
  through: :followed,
  source: :followable,
  source_type: 'Artist'

  has_many :followed_albums,
  through: :followed,
  source: :followable,
  source_type: 'Album'

  has_many :followed_songs,
  through: :followed,
  source: :followable,
  source_type: 'Song'

  has_many :followed_playlists,
  through: :followed,
  source: :followable,
  source_type: 'Playlist'



  has_many :followships, as: :followable,
  foreign_key: :followable_id,
  class_name: :Follow

  has_many :followers,
  through: :followships,
  source: :user


  def self.find_by_credentials(credential, password)
    user = User.find_by(username: credential) || User.find_by(email: credential)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(64)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(64)
  end


  def ensure_img #AJ you genius! <3
    themes = ['bythepool', 'frogideas', 'sugarsweets', 'seascape', 'duskfalling', 'berrypie']
    theme = themes.sample
    self.img_path ||= "http://www.tinygraphs.com/labs/isogrids/hexa/#{self.username + self.email}?theme=#{theme}&numcolors=4&size=220&fmt=svg"
  end

end
