# A simple program to change a user's input with arrays and iterators.

puts "Enter Text to be redacted"
text = gets.chomp
puts "Enter word to be redacted from your text"
redact = gets.chomp



words = text.split(" ") #takes a string and returns (splits into) array

words.each do |word| 
    if word.downcase == redact.downcase #convert and compare lower cases, but retain cases on final output
        print "REDACTED "
    else
        print word + " "
    end
end
