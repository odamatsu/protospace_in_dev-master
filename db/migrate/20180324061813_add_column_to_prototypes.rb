class AddColumnToPrototypes < ActiveRecord::Migration
  def change
    add_column :prototypes, :tag_web, :string
    add_column :prototypes, :tag_ui, :string
    add_column :prototypes, :tag_app, :string
  end
end
