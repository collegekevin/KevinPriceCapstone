# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

puts "Seeding Users 🙂"
Kevin = User.create(username: "Kevin", password: "55555555", first_name: "Kevin", last_name: "Price", user_image: "https://i.kym-cdn.com/photos/images/original/000/259/985/842.jpg", bio: "Flatiron Student")
Bill = User.create(username: "Bill", password: "77777777", first_name: "Bill", last_name: "Gates", user_image:  "https://thumbs.dreamstime.com/b/bob-builder-roley-26417935.jpg", bio: "Microsoft Founder and Billionaire Philanthropist")
Lebron = User.create(username: "Lebron", password: "66666666", first_name: "Lebron", last_name: "James", user_image: "https://thumbs.dreamstime.com/b/hamster-11110051.jpg", bio: "NBA Legend and Billionaire Philanthropist")

# puts "Seeding Posts"
# pic1 = Post.create(post_image: "https://thumbs.dreamstime.com/b/funny-cat-red-tomato-grooming-sitting-window-next-to-large-looking-out-window-dreaming-42995615.jpg", caption:"Twins!", user_id: Kevin.id)
# pic2 = Post.create(post_image: "https://thumbs.dreamstime.com/b/hamster-11110051.jpg", caption:"I feel the same way.", user_id: kevin.id)

puts "Seeding Ads"
ad1 = Ad.create(company: "Sleep Store", ad_text: "Tired from saving the world?", ad_image:"https://media.istockphoto.com/id/1355162205/photo/african-american-woman-sleeping-on-bed-at-home.jpg?b=1&s=170667a&w=0&k=20&c=OybW5UEy9VZVd_AEJHyj_JEidEELjNTSK5597-CAXvo=")
ad2 = Ad.create(company: "The Energy Drink", ad_text: "Need to Power Up to help other?", ad_image:"https://media.istockphoto.com/id/1314800776/photo/attractive-sportswoman-is-refreshing-with-cold-drink-after-hard-exercise.jpg?b=1&s=170667a&w=0&k=20&c=Ub4wB84XWyuqibwv_ftMWOr9ALFwxPqdsLQcXsNntTA=")

puts "Done Seeding 🌱"