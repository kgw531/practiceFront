window.onload = function(){

    // open, close는 window객체의 내장함수
    // 아이디로 참조 불가
    // 직접 변수에 담아줘야 한다.
    let open = document.getElementById('open');
    let close = document.getElementById('close');
    let modal = document.getElementById('modal-box'); // 특수문자가 입력되서 아이디로 바로 접근 불가

    open.addEventListener('click',function(){
        modal.classList.toggle('active');  
        // 이것도 가능
        // modal.classList.add('active');
    })

    close.addEventListener('click',function(){
        modal.classList.toggle('active');
        // 이것도 가능
        // modal.classList.remove('active');
    })

    
}