class Subject < ApplicationRecord
  belongs_to :laboratory
  validates :name, presence: true
  validates :name, uniqueness: true
end
