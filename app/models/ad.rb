class Ad < ApplicationRecord
    has_many :ad_clicks, dependent: :destroy
    has_many :users, through: :ad_clicks
end
