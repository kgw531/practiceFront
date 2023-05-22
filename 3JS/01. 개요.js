function external(){
    console.log('외부스크립트 실행');
    var result = add();
    console.log('result : ', result);
}

function add(x,y){
    return x+y;
}