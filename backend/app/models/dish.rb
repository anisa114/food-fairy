class Dish < ApplicationRecord
    has_and_belongs_to_many :options
    has_and_belongs_to_many :results
end
