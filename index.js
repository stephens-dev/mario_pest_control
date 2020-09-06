// mario pest control

//  Boxed

let button = document.getElementById('button1');

button.onclick = function(event){
    event.preventDefault()

    let a;
    a = document.getElementById(`input1`).value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value;

    let a1;
    a1 = Number(a) * Number(5);
    let b1 = Number(b) * Number(7);
    let c1 = Number(c) * Number(11);
    let total1 = document.createElement('h1');
    let total = document.createElement('h1');
    total1.textContent = "Total Coins Collected: ";
    total.textContent = a1 + b1 + c1;
    document.getElementById('box').appendChild(total1);
    document.getElementById('box').appendChild(total);
}

// brings back to top of page and clears boxs//

let button2;
button2 = document.createElement('button');
button2.textContent = "Clear Page";
button2.style.fontSize = "25px";
button2.style.marginBottom = "35px";
button2.style.marginTop = "40px";
button2.style.background = "white";
document.getElementById('box').appendChild(button2);

button2.onclick = function(){
    let Clear= document.getElementById('box');
    Clear.reset();
}