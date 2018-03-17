class CreatePrototypeCategories < ActiveRecord::Migration
  def change
    create_table :prototype_categories do |t|
      t.integer :prototype_id
      t.integer :tag_id

      t.timestamps null: false
    end
  end
end
