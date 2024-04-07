class Subject < ApplicationRecord
  has_many :assignments
  has_many :laboratories, through: :assignments
  validates :name, presence: true
  validates :name, uniqueness: true
end
