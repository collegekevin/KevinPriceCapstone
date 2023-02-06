Welcome to the Giving Page!

This is a full-stack app with a React frontend and Rails backend. 

The app is designed as a mock-up of a different kind of social media app.

The basic design of the app is not what makes it different. It's a picture 
sharing social media app that allows users to post pictures, follow other 
users, like and comment on the posts of other users. However, The Giving App
has a different view of the entire social media landscape - especially how it
views the posts that members of the app make. The Giving Page understands 
that the users are the ones who provide the content that is on the app and 
that without that content, the app couldn't exist. So to encourage people to
post on the app, all of the profits from adverstising revenue for the app
would be donated to charities. The app itself would be run as a non-profit 
that distributes revenue to charities that are trying to save sick children, 
end world hunger, cure cancer and many other worthwhile causes.

The app would entice celebrities and influencers to post by building 
relationships with the nonprofits that those individuals support. Ideally, 
the fans of those celebrities would follow then onto the app and create a 
powerful revenue stream for these worthwhile charities.

The other difference between The Giving Page and other social media apps 
would be how the app deals with advertising. Most of the ads on social media
apps are presented as user posts, with only the small "Sponsored" under the 
post to alert users to the fact that the post is actually an ad. The apps
present advertising in this way because in almost all cases, advertising is
thought of as a nuisence that people do their best to avoid. On The Giving
Page, the goal would be to create a different experience for users and ads.
The Giving Page would incentivize users to interact with ads because those
interactions are what would create the revenue for the charities. Throughout
user interactions, they'll be reminded that any time they click on an ad or 
buy a product from an advertiser they are increasing the donations that are
going to saving sick children, ending world hunger and curing cancer -
basically if you're on this app interacting with ads, you're a damn hero
that is helping to save the world. This incentizing of user interaction with
advertisers could be groundbreaking for online marketing.


The Giving Page, a Social Media Platform that You Can Feel Good About

User stories:
- Create account or log-in with secure password
- Upload pictures
- View other pictures
      	  - Have the option of only seeing the pics of people you follow 
- Comment on other pictures
- See a list of charities that are earning money by you being there
- See some ads. 
- Click on ads if you are so moved
- Be constantly reminded that you’re awesome for being here because
 		  all of the proceeds from the advertising are going to charity
- Feel good about yourself because any time you spend on the site    
  is helping to save sick children, end world hunger and cure cancer
- If you’re feeling especially flush you can  put in your credit card info 
  and donate to a charity, but the ad revenue would be the main driver of
  donations.

Models and Relationships:

- User has_many Posts
- User has_many Followers
- Post belongs_to User
- User has many Likes
- Post has many Likes
- Like belong_to User
- Like belong_to Post
- User has_many Comments
- Comments belong_to a User


- User has many AdClicks
- Ad has many AdClicks
- AdClicks belong_to a User
- AdClicks belong_to an Ad
- User has many Ads, through AdClicks
- Ad has many Users, through AdClicks


Wireframing:
- Do you remember Instagram before they started having “stories” in mid-2016? It’s a lot like that.
- Also, there are ads because the main idea of the app is that if you’re looking at a website where all the content is provided by other people FOR FREE and there are ads on that website then that ad revenue should go to awesome charities. and not Mark Zuckerberg and Meta shareholders.

New tech to add in the future:
- I want to add use cloudinary as a way to upload pictures to athe app.
- I’d like to use Stripe or something similar to allow users to donate to the “charity of the day directly” if they are so moved.

MVP:
- The app allows users to upload pictures, like and comment on pictures and remove other user’s comments on their pictures if they’re not happy with them.
- The app also keeps track of any ads that a user clicks on.
Stretch Goals:
 - Remove other people’s comments they don’t like from their pictures
- Deploy app because I tried to do it earlier and failed
- The app serves as an alpha version (is that a thing?) of an app that could be used to start a nonprofit


