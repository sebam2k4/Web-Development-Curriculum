# Mad Libs
# Using Python to write a Mad Libs story. Mad Libs are stories with blank
# spaces that a reader can fill in with their own words.

''' 
Mad Libs
Using Python to write a Mad Libs story. Mad Libs are stories with blank
spaces that a reader can fill in with their own words.
'''
print     # How to make line breaks for output?
print "Hello! Your MadLibs python story has started"
print

print "- Provide a name for the main character:"
main_char = raw_input()
print

print "- Please provide three different adjectives:"
print "adjective 1:"
adj1 = raw_input()
print "adjective 2:"
adj2 = raw_input()
print "adjective 3:"
adj3 = raw_input()

print
print "- Please provide three different verbs:"
print "verb 1:"
verb1 = raw_input()
print "verb 2:"
verb2 = raw_input()
print "verb 3:"
verb3 = raw_input()

print
print "- Please provide four different nouns:"
print "noun 1:"
noun1 = raw_input()
print "noun 2:"
noun2 = raw_input()
print "noun 3:"
noun3 = raw_input()
print "noun 4:"
noun4 = raw_input()

print
print "- Enter your favourite animal:"
animal = raw_input()
print
print "- Enter your favourite food:"
food = raw_input()
print
print "- Enter your favourite fruit:"
fruit = raw_input()
print
print "- Enter your favourite number:"
number = raw_input()
print
print "- Enter your favourite superhero name:"
superhero_name = raw_input()
print
print "- Enter your favourite country:"
country = raw_input()
print
print "- Enter your favourite dessert:"
dessert = raw_input()
print
print "- Enter your favourite year:"
year = raw_input()

#The template for the story
STORY = "This morning I woke up and felt %s because %s was going to finally %s over the big %s %s. On the other side of the %s were many %ss protesting to keep %s in stores. The crowd began to %s to the rythym of the %s, which made all of the %ss very %s. %s tried to %s into the sewers and found %s rats. Needing help, %s quickly called %s. %s appeared and saved %s by flying to %s and dropping %s into a puddle of %s. %s then fell asleep and woke up in the year %s, in a world where %ss ruled the world."

print
print STORY % (adj1, main_char, verb1, adj2, noun1, noun2, animal, food, verb2, noun3, fruit, adj3, main_char, verb3, number, main_char, superhero_name, superhero_name, main_char, country, main_char, dessert, main_char, year, noun4)
