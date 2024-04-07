class CreateLaboratories < ActiveRecord::Migration[7.0]
  def change
    create_table :laboratories do |t|
      t.string :name, null: false
      t.numeric :capacity, null: false, default: 0
      t.numeric :registrants, null: false, default: 0

      t.timestamps
    end
  end
end
