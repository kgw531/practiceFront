// script태그가 최상단에 있는 경우 body의 요소를 가져오기 전에 script가 먼저 
// 실행되므로 오류가 발생할 수 있다. 그러므로 window.onload를 통해 
// body태그의 요소들을 다 읽고 실행시키도록 하자.
window.onload = function(){
    console.log('hello world');
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click',function(){
    console.log('addEvent');

    })

    // 익명의 함수 : 변수에 대입하거나 함수 실행 시 인수로 사용할 수 있다.
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click',function(){
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행!');
    })

    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click',() => {
        argTest('안녕하세요.');
    })

    //arguments
    let btn4 = document.getElementById('btn4');
    btn4.addEventListener('click',() => {
        let res = sum_arguments(11,22,33);
        console.log('합계 : ', res)
    })

    btn5.addEventListener('click',() => {
        let random = ran();
        console.log(`random : ${random}`);
    })

    btn6.addEventListener('click',() => {
        // let func = funcTest();
        // func(); 이것도 가능하지만 밑의 코드도 가능하다
        funcTest()();
    })

    btn7.addEventListener('click',() => {
        let calc = document.getElementById('calc').value;
        console.log(eval(calc)) ;

    })

    btn8.addEventListener('click',()=>{
        
        let num1 = -10 / 0;
        let num2 = 10 / 'a';
        let p = document.getElementById('p3');
    
        p.innerHTML = `10 / 0 : ${num1} <br>`;
        p.innerHTML += `10 / 'a' : ${num2} <br>`;
        p.innerHTML += `num1 == Infinity : ${num1 == -Infinity} <br>`;
        p.innerHTML += `num2 == NaN : ${num2 == NaN} <br>`;
        p.innerHTML += `isFinite(num1) : ${isFinite(num1)} <br>`;
        p.innerHTML += `isNaN(num2) : ${isNaN(num2)} <br>`;
    })

}

function funcTest(){
    // 클로저 : 내부함수가 사용하는 외부함수의 지역변수는 내부함수가 소멸할 때까지 
    // 소멸되지 않는 특성을 클로저라고 한다.
    let name = '문인수';
    return function(){
        alert(`${name}님 환영합니다.`)
    };
}


function ran(){
    let random = parseInt(Math.random()*100+1);
    return random;
}


// arguments : 매개변수의 갯수가 가변적인 경우 사용하는 속성
function sum_arguments(){
    let res = 0;

    for(let i = 0 ; i <arguments.length; i++){
        res += arguments[i];
    }

    return res;
}

// 함수의 매개변수
function argTest(value = '매개값 없음'){ // 초기값 저장(ES6부터 도입)
    alert(value);
}



// 선언적 함수
// 선언 : function 함수명 (매개변수, ...){ }
// 호출 : 함수명()
function test(){
    console.log('test호출');
}

// 익명의 함수를 변수에 대입
// 익명의 함수: 함수 이름이 없는 함수
let sum = function(a,b){
    return a + b;
}

console.log('함수 실행 결과 : ', sum(10,20)); //변수(인수, 인수)

// 즉시 실행 함수
(function (a,b){
    console.log(`a : ${a}, b : ${b}`);
    console.log('자동으로 실행')
    }(10,20)
);

const hi = function(){
    return alert('안녕하세요.')
};

const hi1 = () => {return alert('안녕하세요(화살표 함수).')};
// const h1 = () => alert('안녕하세요(화살표 함수).'); 명령문 라인이 한 줄이라면 중괄호, return문을 생략할 수 있다.
