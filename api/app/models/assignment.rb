class Assignment < ApplicationRecord
  belongs_to :laboratory
  belongs_to :subject
  validates :laboratory_id, presence: true
  validates :subject_id, presence: true
end
