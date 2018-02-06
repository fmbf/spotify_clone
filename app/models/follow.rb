class Follow < ApplicationRecord
  validates :user_id, :followable_id, :followable_type, presence: true
  validates_uniqueness_of :user_id, scope: [:followable_id, :followable_type]
  validates_uniqueness_of :followable_id, scope: [:user_id, :followable_type]
  validates_uniqueness_of :followable_type, scope: [:user_id, :followable_id]

  validate :validate_no_self_follow

  belongs_to :followable, polymorphic: true
  belongs_to :user


  def validate_no_self_follow
    if self.followable_type == "User" && self.user_id == self.followable_id
      self.errors[:base] << "Can't follow yourself!"
    end
  end

end
