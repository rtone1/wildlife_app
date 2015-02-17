class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :species
      t.string :adult
      t.string :juvenile

      t.timestamps null: false
    end
  end
end
