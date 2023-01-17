class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :ad_clicks, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :follows, dependent: :destroy
    has_many :ads, through: :ad_clicks

    has_secure_password
    validates :username, uniqueness: true
end
