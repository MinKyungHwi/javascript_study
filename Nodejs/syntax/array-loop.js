var number = [1,400,12,34];
var i = 0;
var total = 0;

while (i < number.length) {
  console.log(number[i]);
  total = total + number[i];
  i = i + 1;
}

console.log(`Total : ${total}`);
