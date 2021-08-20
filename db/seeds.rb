require 'json'
require 'open-uri'

# if Rails.env.development?
  puts "Destroying lists..."
  List.destroy_all
  puts "Destroying bookmarks..."
  Bookmark.destroy_all
  puts "Destroying movies..."
  Movie.destroy_all
# end

10.times do |i|
  url = "http://tmdb.lewagon.com/movie/top_rated?page=#{i + 1}"
  serial = URI.open(url).read
  movies = JSON.parse(serial)["results"]

  movies.each do |result|
    if result["original_language"] == "en"
      Movie.create(
        title: result["original_title"],
        overview: result["overview"],
        poster_url: "https://image.tmdb.org/t/p/original#{result["poster_path"]}",
        rating: result["vote_average"]
      )
      puts "added #{result["original_title"]}"
    end
  end
end

List.create(name: "Thriller", image_url: "https://source.unsplash.com/-dhd4xZS3Uk")
