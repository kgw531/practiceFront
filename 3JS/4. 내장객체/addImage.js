window.onload = function(){
    let imgE = document.createElement('img');
    let date = new Date();
    
    let container = document.querySelector('#container');



    if(date.getHours() < 12){
        imgE.setAttribute('src','images/morning.jpg');
        container.appendChild(imgE);
    } else if(date.getHours() >= 12){
        imgE.setAttribute('src','images/afternoon.jpg');
        container.appendChild(imgE);
    }

}