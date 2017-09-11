/*


Transforms the html string into 13375p34k (aka leetspeak, like how 'h4x0rs' talked in the 90s) - this is very similar to your password obfuscator from w1d1, with a few additional letters to substitute, and a few strings:
a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
The last three ('ck' : 'x', 'er' : '0r', 'you' : 'j00') may be tough, depending on how you implement your solution. ('er' : '0r' is almost guaranteed to be an issue, can you spot why?) Consider these stretch-on-stretch and don't get behind if they give you trouble. You can always return to this later.

If you are doing print_1337.js, you have the opportunity to reconsider your solution for the password obfuscator exercise you did previously. Are conditionals or switch statements the only way to solve this?
Please note - this Substep is considered Stretch. It would be better to come back to solve this after you've finished your Github Avatar Downloader project.
Notice how the key-value pairs for the letters and their '1337' substitutes are structured. What else has key-value pairs and how could we use it to solve this?
Especially for the keys with multiple characters, you will likely need to look up 'Regular Expressions' (RegExp in Javascript) which are very powerful pattern-matching tools.
Once again - don't get caught up in this at the cost of having enough time for your Github avatar downloader project - there's a lot to do today! You can always come back to this one lat

path => '/http-examples/step6/1337.html'
*/
var changes = 
[
['you', 'j00'],
['er', '0r'],
['a', '4'], 
['e', '3'],
['l', '1'],
['o', '0'],
['s', '5'],
['t', '7'],
['ck', 'x']
];

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  changes.forEach(function(rpl, i){
    var old = new RegExp(rpl[0], 'g');
    html = html.replace(old, rpl[1]);
  });
  console.log(html);
  }

getHTML(requestOptions, print1337);


/*
str.replace(/foo/g, "bar")

new RegExp('ab+c', 'i');
new RegExp(/ab+c/, 'i');


--
Password Function
var input = process.argv[2];
var replacements = [['a', '4'], ['e', '3'], ['o', '0'], ['l', '1']] 

function replace(str, repl){
  return str.split(repl[0]).join(repl[1])
}

replacements.forEach(function(rpArr){
  input = replace(input, rpArr);
})

console.log(input) ;





*/