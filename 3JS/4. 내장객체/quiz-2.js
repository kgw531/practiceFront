window.onload = function(){
    let bttn = document.querySelector('#bttn');
    bttn.addEventListener('click',function(){
        let element = document.createElement('div');
        let text = document.createTextNode('알림내용 표시');
        element.appendChild(text);
        // class 지정
        element.classList.add('noti');

        let noti_box = document.querySelector('body > #noti-box');
        noti_box.appendChild(element);

        setTimeout(() => {
            element.remove();

        },2000)
        

        

    })


}