class RemoveStartDateFromMedications < ActiveRecord::Migration[6.1]
  def change
    remove_column :medications, :start_date, :string
  end
end
