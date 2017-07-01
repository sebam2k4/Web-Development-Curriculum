# Mad Libs
# Using Python to write a Mad Libs story. Mad Libs are stories with blank
# spaces that a reader can fill in with their own words.

''' 
Mad Libs
Using Python to write a Mad Libs story. Mad Libs are stories with blank
spaces that a reader can fill in with their own words.
'''
print
print("Hello! Your MadLibs python story has started")
print

main_char = raw_input("- Provide a name for the main character: ")
print

print("- Please provide three different adjectives:")
adj1 = raw_input("adjective 1: ")
adj2 = raw_input("adjective 2: ")
adj3 = raw_input("adjective 3: ")

print
print("- Please provide three different verbs:")
print
verb1 = raw_input("verb 1: ")
verb2 = raw_input("verb 2: ")
verb3 = raw_input("verb 3: ")

print
print("- Please provide four different nouns:")
print
noun1 = raw_input("noun 1: ")
noun2 = raw_input("noun 2: ")
noun3 = raw_input("noun 3: ")
noun4 = raw_input("noun 4: ")

print
animal = raw_input("- Enter your favourite animal: ")
print
food = raw_input("- Enter your favourite food: ")
print
fruit = raw_input("- Enter your favourite fruit: ")
print
number = raw_input("- Enter your favourite number: ")
print
superhero_name = raw_input("- Enter your favourite superhero name: ")
print
country = raw_input("- Enter your favourite country: ")
print
dessert = raw_input("- Enter your favourite dessert: ")
print
year = raw_input("- Enter your favourite year: ")

#The template for the story
STORY = "This morning I woke up and felt %s because %s was going to finally %s over the big %s %s. On the other side of the %s were many %ss protesting to keep %s in stores. The crowd began to %s to the rythym of the %s, which made all of the %ss very %s. %s tried to %s into the sewers and found %s rats. Needing help, %s quickly called %s. %s appeared and saved %s by flying to %s and dropping %s into a puddle of %s. %s then fell asleep and woke up in the year %s, in a world where %ss ruled the world."

print
print(STORY) % (adj1, main_char, verb1, adj2, noun1, noun2, animal, food, verb2, noun3, fruit, adj3, main_char, verb3, number, main_char, superhero_name, superhero_name, main_char, country, main_char, dessert, main_char, year, noun4)
