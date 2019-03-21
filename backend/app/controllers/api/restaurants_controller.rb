module Api
  class RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all.order(created_at: :desc)
        render json: @restaurants
    end
  end
end
