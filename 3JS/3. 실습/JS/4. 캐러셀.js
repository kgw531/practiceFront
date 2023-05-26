// 이미지 배열 만들기
//const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg']

// 컨테이너 박스의 배경 화면을 배열의 0번째 인덱스 값을 넣어보자
// 1. 컨테이너 박스 선택
window.onload = function(){
    let container = document.getElementById('container');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];
    index = 0;
    container.style.backgroundImage = `url(images/${pics[index]})`
    
    right.addEventListener('click',function(){
        index++;
        if(index >= pics.length){
            index = 0;
        }
        container.style.backgroundImage = `url(images/${pics[index]})`
    })

    left.addEventListener('click',function(){
        index--;
        if(index < 0){
            index = pics.length - 1;
        }
        container.style.backgroundImage = `url(images/${pics[index]})`;
        
    })


}

// 일정 간격으로 반복적으로 롤백함수를 실행
// setInteval(롤백함수, 대기시간(밀리초), (롤백함수의 인자 나열))
var i = 0;

var interval = setInterval(function(){
    imgChange();    
},2000)

function imgChange(){
    // index와 pics를 전역변수로 만들어서 사용했다.
    index++;
        if(index >= pics.length){
            index = 0;
        }
        container.style.backgroundImage = `url(images/${pics[index]})`   
}

function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
}

