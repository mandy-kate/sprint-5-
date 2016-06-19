Program Structure
Javascript

Looping a Triangle

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

Fizz Buzz (Part One)
for (var number = 0; number < 101; number += 1) {
if (number % 3 == 0)
console.log("Fizz");
else if (number % 5 == 0)
console.log ("Buzz");
else console.log(number);
}

Fizz Buzz (Part two)
for (var number = 1; number <= 100; number++) {
  var output = "";
  if (number % 3 == 0)
    output += "Fizz";
  if (number % 5 == 0)
    output += "Buzz";
  console.log(output || number);
}
