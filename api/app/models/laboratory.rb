class Laboratory < ApplicationRecord
  belongs_to :subject
  validates :name, presence: true
  validates :name, uniqueness: { scope: :subject_id }
  validates :capacity, presence: true
end
