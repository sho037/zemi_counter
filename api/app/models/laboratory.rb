class Laboratory < ApplicationRecord
  has_many :subjects
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :capacity, presence: true
  validates :capacity, numericality: { only_integer: true, greater_than: 0 }
  validates :registrants, presence: true
  validates :registrants, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
