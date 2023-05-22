// 사용자로부터 출생연도를 입력받아 나이를 출력하는 프로그램

// 전역변수
var date = new Date(); // 내장 객체
var year = date.getFullYear();

function getAge(){
    // 블럭레벨
    if(true){   
        let birth_year = prompt('출생년도를 입력해주세요');
        var age = year - birth_year;
        console.log(`당신의 나이는 ${age} 입니다.`);
    }
}

// var는 함수레벨이기 때문에 오류가 나지 않는다. 만약 위 같이 함수에서 벗어나면 오류
// console.log(`당신의 나이는 ${age} 입니다.`); 
// console.log(birth_year); // 오류 : let은 블럭레벨이므로 오류가 난다.

g_str1 = '전역변수';
var g_str2 = 'var 전역변수';
let g_str3 = 'let 전역변수';

console.log('전역변수 출력============');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

// window 객체
// 브라우저에서 제공하는 브라우저창(window)에 대한 정보를 담고 있는 객체
// 전역변수 사용시 window.변수명 혹은 this.변수명 으로 접근가능

console.log('window.변수명============');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);

console.log('this.변수명 출력============');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);


// 이름을 불러 호출해야 실행이 가능
function test(){
    console.log('전역변수 출력============');
    console.log(g_str1);
    // 같은 이름의 지역변수를 선언시 호이스팅에 의해 undefined 출력
    console.log(g_str2);
    console.log(g_str3);

    console.log('window.변수명============');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);

    console.log('this.변수명 출력============');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);

    // 키워드 없이 선언하면 함수가 실행시 전역변수로 작성
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';

    console.log('지역변수 출력 =============')
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);
    

    //  전역변수와 동일한 이름의 지역 변수 선언 시 지역변수가 우선
    // 상단 출력이 undefined가 나오며 전역변수는 영향을 받지 않는다.
    var g_str2 = '지역변수 == 전역변수'
    console.log('g_str2',g_str2); // 지역변수에서 같은 이름으로 재선언

    if(true){
        b_str1 = '블럭선언'; // 전역변수
        var b_str2 = '블럭선언 var'; // 함수
        let b_str3 = '블럭선언 let'; // 블럭
        // 상수 : 선언과 동시에 초기화, 변경불가
        const b_str4 = '블럭선언 const' // 블럭
    }
    // 블럭레벨스코프 : let, const
    // 블럭 내부에서 선언된 경우 외부에서 호출불가
    console.log('함수내부선언', b_str1);
    console.log('함수내부선언', b_str2);
    // console.log('함수내부선언', b_str3); 오류
    // console.log('함수내부선언', b_str4); 오류





}
// console.log(l_str1); -> 함수 실행 후 접근가ㅡㅇ
// console.log(l_str2);
// console.log(l_Str3);

window.onload = function(){
    console.log('onload 실행 - 페이지 로딩완료==================')
    // var 예약어의 중복선언
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);

    // let으로 선언시 num1을 선언문에 나오기 전에 사용불가
    // let, const도 호이스팅이 되지만 temporal Dead Zone(TDZ)에 위치
    // TDZ : 선언 전에 변수를 사용하는 것을 비허용하는 개념상의 공간
    

    // 중복선언 불가
    let num1 = 0;
    // let num1 = 1;
    num1 = 10;

    const num2 = 0;
    // num2 = 1; const는 변수초기화 불가능
}

