/*
    events - things that happens on your website
 
    this
 */

var fontSize = 12;

function incraseSize()
{   fontSize++;
   resultElement.className = "changeColor";
   /* or this.style.fontSize = "18px"; */
}

function decreaseSize()
{  fontSize--;
   resultElement.className = "";
}

var resultElement = document.getElementById("result");
var plusElement = document.getElementById("plus");
var minusElement = document.getElementById("minus");

plusElement.onclick = incraseSize;

minusElement.onclick = decreaseSize;
