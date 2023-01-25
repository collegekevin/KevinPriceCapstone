class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :ad_clicks, dependent: :destroy
    has_many :likes, dependent: :destroy
    # Will return an array of follows for the given user instance
    has_many :received_follows, foreign_key: :user_they_follow_id, class_name: "Follow"
    # Will return an array of users who follow the user instance
    has_many :followers, through: :received_follows, source: :follower
      # returns an array of follows a user gave to someone else
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    # returns an array of other users who the user has followed
    has_many :users_they_follow, through: :given_follows, source: :user_they_follow
    has_many :comments, dependent: :destroy
    has_many :ads, through: :ad_clicks

    has_secure_password
    validates :username, presence: true, uniqueness: true 

    def home_page_post
        # current_user = 
        self.users_they_follow.map do |followed|
            followed.posts
       end
    end

    def total_followers
        self.followers.length
    end

    def total_users_you_follow
        self.users_they_follow.length
    end

    def list_followers
        self.followers.map do |follower|
            follower.username
        end
    end

    def list_users_you_follow
        self.users_they_follow.map do |followed|
            followed.username
        end
    end

    def total_ad_clicks
        self.ad_clicks.length
    end

    # def does_logged_in_follow?
    #     self.followers.map do |follower|
    # end

    # def get_name
        
    # end

    # how the heck do I work with methods in the models again? I put this in the controller?
    # def unique_ads
    #     User.ads.unique 
    # end
    
end
