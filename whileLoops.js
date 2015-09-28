for (var i = 0; i <= 20; i++) {
  if(i % 2 === 0) {
    console.log(i + ' this number is even');
  } else if(!i % 2 === 0) {
    console.log(i + ' this number is odd');
  }
}
//what number is bigger
var number1 = 15;
var number2 = 20;

if (number1 === number2) {
  console.log('the numbers are the same');
} else if(number1 < number2) {
  console.log('the second number is bigger than the first');
} else {
  console.log('the first number is bigger than the second');
}
//multiplication table
for(var i = 0; i <= 10; i++) {
  console.log(i + ' * 9 is ' + i * 9);
}
