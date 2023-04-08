class CreateProcedures < ActiveRecord::Migration[6.1]
  def change
    create_table :procedures do |t|
      t.string :description
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
