window.onload = function(){
    btn.addEventListener('click', function(e){
        // 버튼이 1개인 경우 submit버튼으로 동작하는 것이 버튼의 기본이벤트
        // 기본이벤트를 제거하자.

        let name = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;
    
        let trE = document.createElement('tr');
        let tdE1 = document.createElement('td');
        let tdE2 = document.createElement('td');
    
        tdE1.appendChild(document.createTextNode(name));
        tdE2.appendChild(document.createTextNode(major));
        trE.appendChild(tdE1);
        trE.appendChild(tdE2);
        
        let tbody = document.querySelector('#attendant > tbody');
        tbody.appendChild(trE);
        
        e.preventDefault();

    })


}