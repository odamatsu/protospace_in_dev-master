class AddColumnComments < ActiveRecord::Migration
  def change
    add_column :comments, :prototype_id, :integer
  end
end
