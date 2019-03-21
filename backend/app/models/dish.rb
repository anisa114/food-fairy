class Dish < ApplicationRecord
    belongs_to :restaurant
    has_many :dish_options
    has_many :options, through: :dish_options 

    has_many :dish_results
    has_many :results, through: :dish_results
end
