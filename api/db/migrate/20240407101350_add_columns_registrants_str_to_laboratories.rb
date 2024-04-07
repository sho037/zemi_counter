class AddColumnsRegistrantsStrToLaboratories < ActiveRecord::Migration[7.0]
  def up
    add_column :laboratories, :registrants_str, :string
    add_reference :laboratories, :subject, foreign_key: true
  end

  def down
    remove_column :laboratories, :registrants_str
    remove_reference :laboratories, :subject, foreign_key: true
  end
end
