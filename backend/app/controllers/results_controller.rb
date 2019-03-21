class ResultsController < ApplicationController
  def create
    newResult = Result.create!({
      :customer => Customer.find(params["customerId"].to_i),
      :quiz => Quiz.find(params["quizId"].to_i),
      :dishes =>  [Dish.find(params["dishRecomendation"].to_i)]
    })
    render json: {:newResult => newResult.id}
  end

  def index
    # LOGIC TO SEARCH FOR GIVEN RESULT AND RENDER SUGGESTED DISH
    customer_id = 1
    puts customer_id 
    @results = Result.where(customer_id: customer_id)
    @data = {}

    @data[:results] = @results.as_json
    
    index=0
    @results.each do |result| 
      
      @dish = result.dishes
      puts @quiz = result.quiz
      @restaurant = @quiz.restaurant
      puts @restaurant
      # puts {:result => @result, 
      #               :restaurant => @restaurant,
      #                 :dish => @dish }
    
      @data[:results][index][:dish] = @dish.as_json
      @data[:results][index][:restaurant] = @restaurant.as_json
      index  = index + 1
    end
    
    render json: @data

    
    
    
  #   @result = Result.find params[:id]
  #   @quiz = @result.quiz
  #   @restaurant = @quiz.restaurant
  #   puts @restaurant
  
  #   id = params[:id]
  #   @dishes = Result.find(id).dishes
  #   render json:  {:dishes => @dishes, :restaurant => @restaurant
  # }
  end

  def show 
    @result = Result.find params[:id]
    @quiz = @result.quiz
    @restaurant = @quiz.restaurant
    @dish = @result.dishes
    render json: {:dish => @dish,
                  :restaurant => @restaurant}

  end
end
