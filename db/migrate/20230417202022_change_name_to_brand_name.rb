class ChangeNameToBrandName < ActiveRecord::Migration[6.1]
  def change
    rename_column :medications, :name, :brand_name
  end
end
