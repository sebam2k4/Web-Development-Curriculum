days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

if (days.length < 0 || days.length > 7) {
  document.write("Invalid")
} else {
  document.write(days[prompt("Number:")])
}