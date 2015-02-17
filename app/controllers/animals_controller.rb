class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    respond_to do |f|
      f.html
      f.json {render json: @animals, status: 200 }
    end
  end

  def show
  	@animal = Animal.find_by({id: params[:id]})
  	respond_to do |f|
      f.html
      f.json {render json: @animal, status: 200 }
  	end
  end

end