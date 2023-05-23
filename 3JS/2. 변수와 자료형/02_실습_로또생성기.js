window.onload = function (){
    console.log('화면로드');
    let btn = document.querySelector('#btn');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');
    lottoDiv.innerHTML = '';
    
    btn.onclick = function(){
        ball = document.querySelector('div[class=ball]');
        lottoDiv.innerHTML = '';
        var arr = [];
        for(let i = 0; i < 5 ; i++){
            arr.push(parseInt(Math.random()*45 + 1)) ;
        }
        for(let i = 0; i < arr.length; i++){
            lottoDiv.innerHTML += `<div class='ball'>${arr[i]}</div>`
        }

        let ballList = document.querySelectorAll('div[class=ball]')
        for(let i = 0 ; i < ballList.length; i++){
            let color = getColor();
            ballList[i].style.backgroundColor = color;
            ballList[i].style.borderColor = color;
        }
        
    }

}

function getColor(){
    console.log('색상반환')
    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);
    return (`rgb(${r},${g},${b})`);
  
}



// var arr = [];
// for(var i = 0; i < 5 ; i++){
//     arr.push(parseInt(Math.random()*45 + 1)) ;
// }

// console.log(arr);
// for(var j = 0; j < arr.length; j++){
//     lottoDiv.innerHTML += `<div class='ball'>${arr[j]}</div>`
// }