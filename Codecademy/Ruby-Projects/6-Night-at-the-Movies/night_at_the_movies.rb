# Organize movie library
# It'll do one of four things: add a new movie to a hash, update the rating for an existing movie, display the movies and ratings that are already in the hash, or delete a movie from the hash. If it doesn't receive one of those four commands, the program will output some kind of error message.

movies = {
    Braveheart: 4.5,
    Forest_Gump: 4,
    Frasier: 5,
}
puts "What would you like to do?"
puts "-- Type 'add' to add a movie."
puts "-- Type 'update' to update a movie."
puts "-- Type 'display' to display all movies."
puts "-- Type 'delete' to delete a movie."
puts

choice = gets.chomp

case choice
when "add"
    puts "Enter movie title to add:"
    title = gets.chomp
    if movies[title.to_sym] = nil
        puts "Enter your rating for the movie (1-5):"
        rating = gets.chomp
        movies[title.to_sym] = rating.to_i
        puts "#{title} with rating #{rating} Added sucessfully"
    else
        puts "The movie title alreay exists!"
        puts "Nothing has been added - run the program again to add another title!"
    end
when "update"
    puts "Enter the existing movie title you want to update:"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "Movie title does not exist!"
    else
        puts "What is the new rating (1-5)?"
        rating = gets.chomp
        movies[title.to_sym] = rating.to_i
        puts "#{title} has been updated with new rating of #{rating}."
    end
when "display"
    movies.each {|movie, rating| puts "#{movie}: #{rating}"}
when "delete"
    puts "What movie do you want to delete?"
    title = gets.chomp
    if movies[title.to_sym].nil?
        puts "Movie title does not exist!"
    else
        movies.delete(title.to_sym)
        puts "The Movie title was deleted!"
    end
else
    puts "Error!"
end