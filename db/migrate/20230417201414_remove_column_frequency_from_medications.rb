class RemoveColumnFrequencyFromMedications < ActiveRecord::Migration[6.1]
  def change
    remove_column :medications, :frequency
  end
end
