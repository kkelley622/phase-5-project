class AddGenericNameToMedications < ActiveRecord::Migration[6.1]
  def change
    add_column :medications, :generic_name, :string 
  end
end
