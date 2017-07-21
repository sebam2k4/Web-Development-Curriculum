# Build a program that takes a user's input, then builds a hash from that input.
# Each key in the hash will be a word from the user; each value will be the number of times that word occurs.
# Visual representation of data like this is called a HISTOGRAM

puts "Enter text:"
text = gets.chomp

words = text.split

frequencies = Hash.new(0) # given the new hash defaul value of 0
words.each { |word| frequencies[word] += 1 } # Adds one to every word it finds
frequencies = frequencies.sort_by do |word, count| # OR write: { |word, count| count } instead.
    count
end
frequencies.reverse! # reverse so it displays the result from highest count to lowest
frequencies.each { |word, count| puts word + " " + count.to_s } # convert number to string with .to_s
