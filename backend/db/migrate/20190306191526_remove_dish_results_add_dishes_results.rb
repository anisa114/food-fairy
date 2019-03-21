class RemoveDishResultsAddDishesResults < ActiveRecord::Migration[5.1]
  def change
    drop_table :dish_results
    create_table :dishes_results do |t|
      t.integer :dish_id
      t.integer :result_id
    end
  end
end
