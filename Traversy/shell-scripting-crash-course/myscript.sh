#! /usr/bin/bash

# ECHO COMMAND
echo Hello World!

# VARIABLES (uppercase by convention) - letters, numbers, underscores
GREETING="hello there stranger"
echo "$GREETING, how are you?"
echo "${GREETING}, how are you?"

# USER INPUT
read -p "Enter your age: " AGE
echo "You're $AGE years old!"

# SIMPLE CONDITIONALS
read -p "Enter your name: " NAME
if [ "$NAME" == "Sebek" ]
then
  echo "Your name is Sebek"
elif [ "$NAME" == "Anna" ]
then
  echo "Your name is Anna"
else
  echo "Your name is NOT Sebek nor Anna!"
fi

# COMPARISON ( -eq, -ne, -gt, -ge, -lt, -le)

NUM1=3
NUM2=5
if [ "$NUM1" -gt "$NUM2" ]
then
  echo "$NUM1 is greater than $NUM2"
else
  echo "$NUM1 is less than $NUM2"
fi

# FILE CONDITIONS
## -d file  True if the file is a directory
## -e file  True if the file (or folder) exists (note that this is not particularly portable, thus -f is generally used)
## -f file  True if the provided string is a file
## -g file  True if the group id is set on a file
## -r file  True if the file is readable
## -s file  True if the file has a non-zero size
## -u file  True if the user id is set on a file
## -w file  True if the file is writable
## -x file  True if the file is an executable

FILE="text.txt"
if [ -f "$FILE" ]
then
  echo "$FILE is a file"
else
  echo "$FILE is not a file"
fi

# CASE STATEMENT
# can input y, Y, yes, YES, yEs, YEs, etc.
read -p "Are you 21 or older? Y/N " ANSWER
case "$ANSWER" in 
  [yY] | [yY][eE][sS])
    echo "You can have a beer :)"
    ;;
  [nN] | [nN][oO])
    echo "Sorry, no drinking"
    ;;
  *)
    echo "Please enter y/yes or n/no" #default
    ;;
esac

# SIMPLE FOR LOOP
NAMES="Brad Kevin Alice Mark"
for NAME in $NAMES
  do
    echo "Hello $NAME"
done

# FOR LOOP to rename files
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES
#   do
#     echo "Renaming $FILE to new-$FILE"
#     mv $FILE $NEW-$FILE
# done

# WHILE LOOP - read through a file line by line
LINE=1
while read -r CURRENT_LINE
  do
    echo "$LINE: $CURRENT_LINE"
    ((LINE++)) # increment
done < "./new-new-new-1.txt"


# FUNCTION
function sayHello() {
  echo "Hello World from a bash function!"
}

sayHello

# FUNCTION WITH PARAMETERS
function greet() {
  echo "Hello, I am $1 and I am $2"
}

greet "Sebek" "33"

# CREATE FOLDER AND WRITE TO A FILE
# mkdir hello
# touch "hello/world.txt"
# echo "Hello World" >> "hello/world.txt"
# echo "Created hello/world.txt"