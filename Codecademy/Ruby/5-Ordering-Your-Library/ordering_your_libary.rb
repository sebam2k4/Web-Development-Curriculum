#use two parameters - 'arr' fro array and 'rev' for reverse.

def alphabetize(arr, rev=false)     # second parameter rev (reverse) defaults to 'false' if no argument for it is given.
    arr.sort!
    if rev == true
        return arr.reverse!
    else
        return arr.sort!
    end
end

numbers = [1,4,2,5,3]

puts "DESCENDING: #{alphabetize(numbers)}"
puts "ASCENDING: #{alphabetize(numbers, true)}"
