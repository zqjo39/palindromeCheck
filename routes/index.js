var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    phrase: "taco Cat"
  });
});

/* POST the form data */
router.post('/', function(req, res) {
  res.render('index', {
    phrase: req.body.userText,
    reverse: reverseString(req.body.userText),
    reverseTwo: reverseStringTwo(req.body.userText),
    message: getResultDescription(req.body.userText)
  })
})

function checkPalindrome(phrase) {
  phrase = phrase.replace(/ |\?|\.|,|:|;|!|'|"/gi, "");
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  console.log(temp)
  if(phrase.toLowerCase() === temp.toLowerCase()){
    return true
  } else {
    return false
  }
}

function getResultDescription(phrase) {
  if(checkPalindrome(phrase)) {
    return `"${phrase}" is a palindrome!`
  }
  return `"${phrase}" is not a palindrome!`
}

function reverseString(phrase) {
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  return temp
}

function reverseStringTwo(phrase) {
  phrase = phrase.replace(/ |\?|\.|,|:|;|!|'|"/gi, "");
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  return temp.toLowerCase();
}

module.exports = router;