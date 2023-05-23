window.onload = function array(){
    let area = document.getElementById('area1')
    let btn1 = document.getElementById('btn1')

    //btn1 요소에 click이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click',function(){

        // 1. 배열을 생성하기
        let array1 = new Array(); // []
        let array2 = new Array(3); // [empty x 3]
        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];
        console.log('array1 : ', array1);
        console.log('array2 : ', array2);
        console.log('array3 : ', array3);
        console.log('array4 : ', array4);

        //여러가지 타입을 입력
        let array5 = [
            '고경희', //문자
            20, // 숫자
            true, // boolean
            [1,2,3,4], //배열
            function (){ //함수
                reutrn(1);
            },
            {} // 객체
        ]

        // 2. 배열에 값을 추가하기
        console.log('array1 ===============')
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        console.log(array1);

        area1.innerHTML = `array1(빈배열)에 값 대입 : [${array1}]<br>`
            + `array1.length : ${array1.length}<br><br>`

        console.log('array2 ===============')
        // 배열의 길이를 3으로 정했지만 길이가 자동으로 늘어난다.
        array2[0] = '자동차'
        array2[1] = '비행기'
        array2[2] = '기차'
        array2[3] = '배'
        console.log(array2);

        area1.innerHTML += `array1(빈배열)에 값 대입 : [${array2}]<br>`
        + `array1.length : ${array2.length}<br><br>`
        


    });

    let area2 = document.getElementById('area2');
    let btn2 = document.getElementById('btn2');

    // 1. indexOf : 항목의 index번호를 반환
    btn2.addEventListener('click',function(){
        // area2.innerHTML = '실행환료';
        let array = ['귤','복숭아', '사과', '망고','자몽'];
        area2.innerHTML = `array : [${array}] <br><br>`
        // 복숭아의 index
        area2.innerHTML += `복숭아가 있는 배열의 인덱스 : ${array.indexOf('복숭아')}<br>`
        // 자몽의 index
        area2.innerHTML += `자몽이 있는 배열의 인덱스 : ${array.indexOf('자몽')}`

    });

    // 2. concat() : 배열을 연결하여 반환
    // 배열1.concat(배열2)
    // 배열1의 요소, 배열2의 요소를 결합

    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3')

    btn3.addEventListener('click',function(){
        // area3.innerHTML = '실행완료';
        let array1 = ['귤','사과'];
        let array2 = ['바나나','수박','오렌지'];

        area3.innerHTML = `array1 : [${array1}]<br>`
        area3.innerHTML += `array2 : [${array2}]<br>`

        area3.innerHTML += `결합 : [${array1.concat(array2)}]<br>`
        area3.innerHTML += `array1 : [${array1}]` // 원본에 영향을 미치지 않는다.

        area3.innerHTML += `결합 : [${array2.concat(array1)}]<br>`
        area3.innerHTML += `array2 : [${array2}]` // 원본에 영향을 미치지 않는다.
    });

    //3. join(): 배열의 요소들을 결합하여 문자열로 반환
    // 매개값으로 구분자를 입력할 수있다.
    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4')

    btn4.addEventListener('click',function(){
        // area4.innerHTML = '실행완료';
        let array = ['서울','강원','경기'];
        area4.innerHTML = `array : [${array}]  type : array <br>`
        area4.innerHTML = `array.toString() : [${array.toString()}] type : 문자열<br>`
        area4.innerHTML += `join() : [${array.join()}] type : 문자열<br>`
        area4.innerHTML += `join('/') : [${array.join('/')}]<br>`

        //문자열을 다시 배열로 바꾸는 방법
        let str = array.join(' '); // 공백을 구분자로 문자열 생성
        area4.innerHTML += `str.split(' ') : [${str.split(' ')}]<br>` // 문자열을 다시 배열로

    })

    // 4. reverse() : 기본 배열의 요소를 역순으로 한 배열을 만들어준다.
    // 원본에 영향을 미치는 메서드이다.
    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5')
    btn5.addEventListener('click',function(){
        // area5.innerHTML = '실행완료';
        let array = Array.of(10,5,3,6);

        area5.innerHTML = `array : [${array}]<br><br>`
        area5.innerHTML += `array.reverse() : [${array.reverse()}]<br><br>`
        area5.innerHTML += `array : [${array}]<br><br>` // 원본을 직접 변경시킴.

    })
    

    // 5. sort() 
    // 원본 배열에 영향을 미치는 메서드
    let area6 = document.getElementById('area6');
    let btn6 = document.getElementById('btn6')
    btn6.addEventListener('click',function(){
        let array1 = [10, 35, 230, 100, 885];
        let array2 = ['Cherry','apple','Apple','Banana']

        area6.innerHTML += `array1 : [${array1}]<br>`
        area6.innerHTML += `array2 : [${array2}]<br>`

        area6.innerHTML += `array1.sort() : [${array1.sort()}]<br>`
        area6.innerHTML += `array2.sort() : [${array2.sort()}]<br>`

        area6.innerHTML += `array1 : [${array1}]<br>`
        area6.innerHTML += `array2 : [${array2}]<br>`

        array1.sort(function(left, right){
            //return reft - right; // 오름차순 정렬
            return right - left; // 내림차순 정렬
        })

        area6.innerHTML += `array1 내림차순 정렬 : [${array1}]<br>`
        area6.innerHTML += `array2 오림차순 정렬 : [${array2.sort().reverse()}]<br>`

    })
    
    //6. push(), pop()
    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click',function(){
        let array = ['아이유','GD', '방탄소년단'];
        area7.innerHTML = `array : [${array}]<br>`;

        array.push('coldplay') // 배열에요소를 추가후 배열의 길이를 늘린다.
        area7.innerHTML += `array : [${array}]<br>`;
        array.push('임창정')
        area7.innerHTML += `array : [${array}]<br>`;

        // 배열의 마지막 요소를 반환하고 제거한다.
        area7.innerHTML += `array.pop() : [${array.pop()}]`;
    });

    let area8 = document.getElementById('area8');
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click',function(){
        let array = ['아이유','GD', '방탄소년단','박효신','크러쉬'];
        area8.innerHTML = `array : [${array}]<br>`;
        //맨 앞에 요소를 추가 후 요소의 개수를 리턴한다.
        array.unshift('coldplay'); 
        area8.innerHTML += `array.unshift 후: [${array}]<br>`;

        // 맨앞에 요소를 반환 후 제거
        area8.innerHTML += `array.shift : [${array.shift()}]<br>`;
        area8.innerHTML += `array.shift 후 : [${array}]<br>`;
    });


    // 8. slice(), splice()
    let area9 = document.getElementById('area9');
    let btn9 = document.getElementById('btn9');

    btn9.addEventListener('click',function(){
        let array = ['java', 'oracle', 'HTML5', 'CSS3', 'JS'];

        area9.innerHTML += `array : [${array}]<br><br>`;
        // array.slice(시작인덱스, 끝인덱스)
        // 시작인덱스 ~ 끝인덱스-1 요소를 추출 반환
        // 끝 인덱스는 포함하지 않는다.
        // 원본 배열에는 영향을 미치지 않는다.
        area9.innerHTML += `array.slice(2,4) : [${array.slice(2,4)}]<br>`;
        area9.innerHTML += `array : [${array}]<br>`;


        //array.splice(시작인덱스, 삭제할 갯수, 추가할 요소)
        // 삭제된 요소를 반환
        // 원본 배열에 영향을 미치는 메서드이다.
        area9.innerHTML += `array.splice(2,0,'spring','mybatis') : [${array.splice(2,0,'spring','mybatis')}]<br>`
        area9.innerHTML += `array : [${array}]<br>`
    });








}