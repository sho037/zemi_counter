class AddColumnsRegistrantsStrToLaboratories < ActiveRecord::Migration[7.0]
  def up
    add_column :laboratories, :registrants_str, :string
  end

  def down
    remove_column :laboratories, :registrants_str
  end
end
