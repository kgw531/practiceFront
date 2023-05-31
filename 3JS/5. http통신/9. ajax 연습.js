window.onload = function(){
    let btn = document.querySelector('#btnCampInfo');
    btn.addEventListener('click',function(e){
        e.preventDefault();
        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        let parms = '';
        
        
        for(let pair of formData.entries()){
            console.log('pair[0] : ', pair[0]);
            console.log('pair[1] : ', pair[1]);
            
            parms += `${pair[0]}=${pair[1]}&`;
        }
        
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        url += parms;

        fetch(url)
        .then(res => res.json())
        .then((json)=>{
            console.log(json);

        })
    })

    
}