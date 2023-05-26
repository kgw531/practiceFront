window.onload = function(){
    btn1.addEventListener('click',function(){
        // 요소노드 생성
        let elementNode = document.createElement('h3');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('하이')

        //연결(자식요소로 등록)
        elementNode.appendChild(textNode);

        // div에 연결
        area1.appendChild(elementNode);

        area1. innerHTML += '<h3>innerHTML로도 가능하다.</h3>'

    })

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법!
    btn2.addEventListener('click',function(){
        let imgNode = document.createElement('img');

        // 속성 설정 하는 방법
        //imgNode.src = 'images/morning.jpg'; 이렇게도 추가가능
        imgNode.setAttribute('src','images/morning.jpg');
        imgNode.setAttribute('width', '150px');
        imgNode.setAttribute('height', '100px');

        area2.appendChild(imgNode);
        
        //이렇게도 추가가능
        area2.innerHTML += '<img src="images/morning.jpg" width="150px" height="100px">'

        

    })

    btn3.addEventListener('click',function(e){
        area3.remove();

        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);
        
        // 상위요소를 반환
        console.log(target.parentNode);

        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);



    })

    btn4.addEventListener('click',() =>{
        // p 요소 생성
        let pNode = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('신규노드 추가');
        // 연결
        pNode.appendChild(textNode);
        // 부모요소 선택(body선택)
        let body = document.querySelector('body')
        // 노드 선택(삽입하고 싶은 위치의 요소를 선택 : h1 선택)
        let h1 = document.querySelector('h1');

        body.insertBefore(pNode,btn2); // 내가 원하는 위치에 삽입할 수 있다.
        body.appendChild(pNode); // 요소가 마지막 지점에 추가된다.




    })

}