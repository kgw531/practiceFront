// 함수를 실행시키기 위해서 버튼을 클릭한다.
function typetest(){
    // alert('typetest');
    console.log('typetest');

    // 변수를 선언 시 사용되는 키워드
    // var, let, const(상수)

    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은 따옴표, 큰 따옴표로 묶은 데이터
    let name = '문인수';
    let name1 = '문인수';
    let name2 = ''; // 빈 문자열


    // 논리값: true, false
    let check = false;

    // 박스를 선택
    var area1 = document.querySelector('#area1');
    // 박스에 값을 입력
    area1.innerHTML = "<h4>안녕하세요<h4>";
    area1.innerHTML += `name : ${name}, type : ${typeof(name)} <br>`;
    area1.innerHTML += `age : ${age}, type : ${typeof(age)} <br>`;
    area1.innerHTML += `height : ${height}, type : ${typeof(height)} <br>`;
    area1.innerHTML += `check : ${check}, type : ${typeof(check)}<br>`;
}

function typetest2(){
    // 배열 선언
    let hobbies = ['농구','축구', '야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '객체 테스트';
    area2.innerHTML = `hobbies : ${hobbies}, type : ${typeof(hobbies)}<br>` 

    // 함수 선언
    // 초기값을 지정할 수 있다.
        // 변수에 함수를 저장할 수 있고, 매개변수로 함수를 넘겨 줄 수도 있다.
        // 매개변수의 갯수가 일치하지 않은 경우 undefined로 초기화되어 오류가 발생할 소지가 발생 --> 초기값 지정을 해주면 좋다.
    let testFunction = function(num1 = 0, num2 = 0){ 
        console.log(num1);
        console.log(num2);
        return num1 + num2;
    }

    console.log('testFunction',testFunction(10,20))
    console.log('testFunction',testFunction(10)) // 매개 변수의 갯수가 일치하지 않아도 실행됨
    

    area2.innerHTML += `testFunction : ${testFunction}, type : ${typeof(testFunction)}`

    // 객체타입
    let user = {
        /* 
            속성 : 값,
            속성 : 값, .. 
        */
        name : '문인수',
        age : 20,
        height: 184.5,
        id : 'test',
        hobbies : ['축구', '야구', '농구']
    };

    console.log(user);
    console.log(user.name);
    console.log(user.hobbies[2]);

    area2.innerHTML += `user : ${user}, type : ${typeof(user)}<br>`;
    area2.innerHTML += `user : ${null}, type : ${typeof(null)}<br>`;
    area2.innerHTML += `user : ${undefined}, type : ${typeof(undefined)}<br>`;

}


// 2. 데이터 형변환 
//  1) 문자열과 숫자의 '+' 연산
//      문자열과 + 여난시 문자열로 변경
//      그리고 연산 시 숫자 타입인 경우 숫자로 변환하여 연산처리
function plusTest(){
    let test1 = 7 + '7' // 77
    let test2 = '7' + (7+7) // 괄호의 연산이 우선순위 : '714'
    let test3 = 3 * '7' // 21 -> 곱하기 연산은 이어쓰지 않는다.
    let test4 = 3 * 'a' // NaN
    let test5 = '3' * '6' // 18

    let area3 = document.getElementById('area3');

    area3.innerHTML += `test1 : ${test1}<br>`;
    area3.innerHTML += `test2 : ${test2}<br>`;
    area3.innerHTML += `test3 : ${test3}<br>`;
    area3.innerHTML += `test4 : ${test4}<br>`;
    area3.innerHTML += `test5 : ${test5}<br>`;
}

function castingTest(){
    let area4 = document.querySelector('#area4');
    area4.innerHTML += `${String(2) + Number('4')} <br>`;
    area4.innerHTML += `${2 + parseInt('3')}<br>`;
    area4.innerHTML += `${2 + parseFloat('3')}<br>`;

    // 16진수를 10진수로 변환하는 방법
    // ff: 255
    area4.innerHTML += `${parseInt('ff',16)}`

}

function opTest(){
    let area5 = document.querySelector('#area5');
    area5.innerHTML += `'==' 연산자 테스트 <br>`;
    area5.innerHTML += `'7==7' : ${7==7}<br>`;
    area5.innerHTML += `'7==7' : ${7=='7'}<br>`;

    area5.innerHTML += `'===' 연산자 테스트 <br>`;
    area5.innerHTML += `'7===7' : ${7===7}<br>`;
    area5.innerHTML += `'7===7' : ${7 === '7'}<br>`;


}

function forTest(){
    // 1~10까지의 수를 담고 있는 배열
    let array = [1,2,3,4,5,6,7,8,9,10];
    for(let i = 0; i<array.length; i ++){
        console.log(array[i]);
    }
    console.log('for =============================')

    for(let i in array){
        console.log(array[i]);
    }
    let student = {
        name : '고경희',
        age : 20,
        class : '1'
    }

    // for in : 객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key,student[key])
    }
    console.log('for in =============================')

    //배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num);
    })
    console.log('forEack =============================')

    let i = 0;
    while(true){
        i++;
        // 짝수이면 출력
        if(i % 2 == 0){
            console.log(i);
        }
        console.log(i);

        if( i > 5){
            break;
        }
        
    }
    console.log('while =============================')

    // ES6부터 추가된 for문
    for(let iterator of array){
        console.log(iterator);
    }

}