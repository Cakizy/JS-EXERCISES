let firstDiv = document.querySelector(`div`);
console.log(firstDiv);

let allParagraphs = document.querySelectorAll(`p`);
console.log(allParagraphs);

let lastDiv = document.getElementsByTagName(`div`)[2];
console.log(lastDiv);

// let body = document.getElementsByTagName(`body`)[0];
// let lastDiv = body.lastElementChild.previousElementSibling;
// console.log(lastDiv); /* Last div 2nd version */

let lastDivH3 = lastDiv.lastElementChild;
console.log(lastDivH3);

let lastDivH1 = lastDiv.firstElementChild;
console.log(lastDivH1);

// let lastDivH1 = lastDivH3.previousElementSibling;
// console.log(lastDivH3);

let text1P2Div = document.getElementsByClassName(`second`)[0].innerText;
console.log(text1P2Div);

let textTo2Div = document.getElementsByTagName(`div`)[1].lastElementChild;
textTo2Div.innerText += ` Text`;

lastDivH1.innerText = ``;
lastDivH1.innerText = `I did it`;

lastDivH3.innerText = ``;
lastDivH3.innerText = `I did it as well`;