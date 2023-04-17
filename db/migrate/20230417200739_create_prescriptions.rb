class CreatePrescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :prescriptions do |t|
      t.integer :user_id
      t.integer :medication_id
      t.string :dose
      t.string :frequency
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
