class Ad < ApplicationRecord
    has_many :ad_clicks, dependent: :destroy
end
