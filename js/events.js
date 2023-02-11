console.log('this is event folder');
//option-1
//<button onclick="console.log(7)">Another Btn</button>

//option-2 add onclick funtion (eta besi use korbo)
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option-3 
const blue = document.getElementById('make-blue');
blue.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//option-3 another
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
//option-4
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makeItPink)
function makeItPink() {
    document.body.style.backgroundColor = 'pink';
}
//option-4 another
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeItGreen() {
    document.body.style.backgroundColor = 'green';
})
//option-4 final..
document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})