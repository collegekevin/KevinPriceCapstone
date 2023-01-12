class CreateAds < ActiveRecord::Migration[6.1]
  def change
    create_table :ads do |t|
      t.string :company
      t.string :ad_text
      t.string :ad_image

      t.timestamps
    end
  end
end
