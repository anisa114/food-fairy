class Quiz < ApplicationRecord
  belongs_to :restaurant
  has_many :questions
end
