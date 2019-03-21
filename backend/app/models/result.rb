class Result < ApplicationRecord
  belongs_to :customer
  belongs_to :quiz
  has_and_belongs_to_many :dishes
end
