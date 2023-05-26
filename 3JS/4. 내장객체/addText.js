window.onload = function(){
    order.addEventListener('click',function(){
        let book = document.querySelector('#container > h2').innerHTML;

        let e = document.createElement('p');
        let bookText = document.createTextNode(book);

        e.appendChild(bookText);

        let orderInfo = document.getElementById('orderInfo');
        orderInfo.appendChild(e);

        // // 다른 방법
        // let container = document.querySelector('#container');
        // let order = document.querySelector('#order');
        // // let orderInfo = document.querySelector('#orderInfo');

        // order.addEventListener('click',function(){
        //     let p = document.createElement('p');
        //     innerTxt = document.querySelector('#container > h2').innerText;
        //     let textNode = document.createTextNode(innerTxt);

        //     p.appendChild(textNode);
            
        // })
        

    })


}