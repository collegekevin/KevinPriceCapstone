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

puts "Done Seeding 🌱"