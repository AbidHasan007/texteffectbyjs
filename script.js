const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text =' Web Developer';
let i=1;
let speed = 300  / speedEl.value;
speedEl.addEventListener('input', (e)=> speed = 300 / e.target.value);
writeText()
function writeText(){   
    textEl.innerHTML =` ${text.slice( 0, i)}_`;
    i++    
    if(i > text.length){
        i=1
    }
    setTimeout(writeText,speed)
}