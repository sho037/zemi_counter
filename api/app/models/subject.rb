class Subject < ApplicationRecord
  has_many :laboratories
  validates :name, presence: true
  validates :name, uniqueness: true
end
