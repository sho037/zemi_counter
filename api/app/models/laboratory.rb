class Laboratory < ApplicationRecord
  belongs_to :subject
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :capacity, presence: true
end
