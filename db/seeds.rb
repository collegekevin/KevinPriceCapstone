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
Bill = User.create(username: "Bill", password: "77777777", first_name: "Bill", last_name: "Gates", user_image:  "https://cdn.pixabay.com/photo/2022/11/11/02/59/gates-7584115__480.png", bio: "Microsoft Founder and Billionaire Philanthropist")
Lebron = User.create(username: "Lebron", password: "66666666", first_name: "Lebron", last_name: "James", user_image: "https://cdn.pixabay.com/photo/2016/02/01/17/20/lebron-1173987__480.png", bio: "NBA Legend and Billionaire Philanthropist")
Taylor = User.create(username: "Taylor", password: "11111111", first_name: "Taylor", last_name: "Swift", user_image: "https://cdn.pixabay.com/photo/2021/02/25/12/25/taylor-swift-6048968__480.jpg", bio: "Musical Genius and Social Media Superstar")

puts "Seeding Ads"
ad1 = Ad.create(company: "Sleep Store", ad_text: "Tired from saving the world?", ad_image:"https://media.istockphoto.com/id/1355162205/photo/african-american-woman-sleeping-on-bed-at-home.jpg?b=1&s=170667a&w=0&k=20&c=OybW5UEy9VZVd_AEJHyj_JEidEELjNTSK5597-CAXvo=")
ad2 = Ad.create(company: "The Energy Drink", ad_text: "Need to Power Up to help others?", ad_image:"https://media.istockphoto.com/id/1314800776/photo/attractive-sportswoman-is-refreshing-with-cold-drink-after-hard-exercise.jpg?b=1&s=170667a&w=0&k=20&c=Ub4wB84XWyuqibwv_ftMWOr9ALFwxPqdsLQcXsNntTA=")
ad3 = Ad.create(company: "Top Dog Food", ad_text: "Your dog should eat better than you!", ad_image:"https://media.istockphoto.com/id/1337583771/photo/a-large-grilled-filet-mignon-steak-with-butter-and-thyme-is-served-chopped-on-a-wooden-board.jpg?s=612x612&w=0&k=20&c=E_LPB7wNiAnF_xBnUJAaX2cUrIKsB-XtKGjRmunLc7o=")
ad4 = Ad.create(company: "Super Toilet Paper", ad_text: "Change the world one square at a time!", ad_image:"https://media.istockphoto.com/id/1213342916/vector/toilet-paper-icon-flat.jpg?s=612x612&w=0&k=20&c=bOpMnohSf_5Kys4gfwPIere4LHjFjpORI3BMa_Mtj18=")
ad5 = Ad.create(company: "The Gift Palace", ad_text: "We hear you're a giver?", ad_image:"https://media.istockphoto.com/id/1383842766/photo/gift-image-for-fathers-day-and-men.jpg?b=1&s=170667a&w=0&k=20&c=Ndk5R-GxsHlrSMV9DNjACm4RzW4JFP9YIDHx8VUhTTQ=")
ad6 = Ad.create(company: "A Massage You Believe In", ad_text: "Treat yourself. You deserve it.", ad_image:"https://media.istockphoto.com/id/1297624578/photo/spouses-receiving-relaxing-beauty-treatment-lying-at-luxury-spa-center.jpg?s=612x612&w=0&k=20&c=6S_Og4bKn2UNuzGQ7PIsQDToflBmBW5p6swChR1uw3U=")



# puts "Seeding Posts"
# pic1 = Post.create(post_image: "https://thumbs.dreamstime.com/b/funny-cat-red-tomato-grooming-sitting-window-next-to-large-looking-out-window-dreaming-42995615.jpg", caption: "Twins!", user_id: Kevin.id)
# pic2 = Post.create(post_image: "https://thumbs.dreamstime.com/b/hamster-11110051.jpg", caption: "I feel the same way.", user_id: Kevin.id)

# puts "Seeding Comments"
# com1 = Comment.create(comment_text:"", user_id: , post_id: )


puts "Done Seeding 🌱"