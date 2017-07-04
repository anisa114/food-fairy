class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.references :question, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
