# Virtual Computer Project
# create a class and generate instances of that class
# that can manipulate imaginary files

class Computer
    @@users = {}
    
    def initialize(username, password)
        @username = username
        @password = password
        @files = {}
        
        @@users[username] = password
    end
    
    def create(filename)
        time = Time.now
        @files[filename] = time
        puts "new file was created by #{@username}"
        puts "filename: #{filename} created: #{time}"
        puts
    end
    
    def Computer.get_users
        return @@users
    end
    
end

my_computer = Computer.new("Sebek", "complicated_password")
ania_computer = Computer.new("Ania", "secret_password")
tablet = Computer.new("Guest", "guest")

my_computer.create("web_development_progress.txt")
ania_computer.create("todo.txt")
tablet.create("memes.jpg")
my_computer.create("ruby-project.txt")

puts "Users: #{Computer.get_users}"
