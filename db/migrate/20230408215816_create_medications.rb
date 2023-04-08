class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :dose
      t.string :frequency
      t.date :start_date
      t.integer :user_id

      t.timestamps
    end
  end
end
