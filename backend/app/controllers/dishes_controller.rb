class DishesController < ApplicationController

  # def show 
  #   @result = Result.find params[:result_id]
  #   @quiz = Quiz.where(id: @result.quiz_id)
  #   @restaurant = Restaurant.where(id: @quiz.restaurant_id)
  #   id = params[:id]
  #   @dish = Dish.where(result_id: @result_id, id: id)
  #   render :json => {:dish => @dish,
  #                   :restaurant => @restaurant
  #   }
  # end

  def index 
    @restaurant = Restaurant.find params[:restaurant_id]
    @dishes = Dish.where(restaurant_id: @restaurant.id)

    render :json => { :dishes => @dishes
    }


  end 

  def create
    (1..5).each do |n|
      dish = Dish.create(restaurant_id: params["restaurant_id"], name: params["dish[#{n}]"], image: params["dish[#{n}][img][#{n}]"])
   end
  end



end
