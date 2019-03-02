class CreateResults < ActiveRecord::Migration[5.1]
  def change
    create_table :results do |t|
      t.references :customer, foreign_key: true
      t.references :quiz, foreign_key: true

      t.timestamps
    end
  end
end
