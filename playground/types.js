/* eslint-disable */
const name = 'Dawn';
const middle = "my middle name";
const last = `my last name`;

//use backslash to escape 

const sentenceWithEscape = 'she\'s so cool';
const sentence = "she's so cool";
const sentenceWithTheWorks = "she's so \"cool\"";

//strings on multiple lines is done by using backslash at the end of each line (excluding last)
//note: when output, the string will be on one line

const song = 'I \
\
really \
\
like \
\
pizza!';

//however, using backtick quotes, you can do multi-line strings and the line breaks are maintained when output.

const songWithBackTicks = `I 

really 

like 

pizza!`;

const hello = 'Hello, my name is ' + name + '. It\'s nice to meet you.';

const helloBackTicks = `Hello, my name is ${name}. It's nice to meet you. I am ${100 + 1} years old.`;

const html = `
    <div>
      <h2>${name}</h2>
      <p>${hello}</p>
    </div>
    `;

document.body.innerHTML = html;