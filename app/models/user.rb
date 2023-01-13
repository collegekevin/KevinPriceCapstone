class User < ApplicationRecord
    has_many :posts
    has_many :ad_clicks
    has_many :likes
    has_many :follows
    has_many :ads, through: :ad_clicks

    has_secure_password
    validates :username, uniqueness: true
end
