function gradeAssinger (num) {
  if (num >= 90) {
    console.log('you got an A');
  } else if (num >= 80) {
    console.log('you got a B');
  } else if (num >= 70) {
    console.log('you got a c');
  } else if (num >= 60) {
    console.log('you got a d');
  } else {
    console.log('you got an f');
  }
}

function helloInMultipleLanguages(language) {
  if (language === 'english') {
    console.log('hello world!');
  } else if(language === 'deutsch') {
    console.log('Hallo Welt!');
  } else if (language === 'espanol') {
    console.log('holla mundo!');
  }
}
function pluralizer(noun, number) {
  if (number % 2 === 0 && number % 2 === 1) {
    console.log('there are ' + number + noun + 's');
  } else {
    console.log('there is' + number + noun);
  }
}
function backwardsLoop(num) {
  num = 0;
  while(i < 10 ) {
    i--;
    console.log(i);
  }
}

var carNames = ['lexus', 'toyota', 'mercedes-benz'];
var i = 0;
while(i < carNames.length) {
  console.log(carNames[i]);
  i++;
}

var i = 0;
while(i <= 20) {
  i++;
  if(i % 2 === 0) {
    console.log(i);

  }
}
