var sampleArr = [1,2,3,4,5];
function sumArray(arr) {
  var total = 0;
  var i = 0;
  if (arr.length === 0) {
    return 'this array is empty';
  }
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function checkPalindrome(str) {
  var palindrome = str.split('').reverse().join('');
  if (palindrome === str) {
    return true;
  } else {
    return false;
  }
}


function sentenceChecker(str) {
  str = str.split(' ');
  var total = 0;
  var wordCount = str.length;
  for (var i = 0; i < str.length; i++ ) {
    total += str[i].length;
  }

  var avgLength = total/wordCount;
  console.log('this sentence has ' + wordCount + ' words and the average word count is ' + avgLength);
}
