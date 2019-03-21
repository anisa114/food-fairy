class QuestionsController < ApplicationController

    def show 
        @question = Question.find params[:id]
        @options = Option.where(question_id: @question.id)
       
            render :json => {:question => @question, 
                :options => @options.as_json(:include => :dishes ) 
            }     
    end
end
