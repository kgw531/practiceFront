window.onload=function(){
    let btn = document.querySelector('#btnCampInfo');

    btn.addEventListener('click',function(e){
        e.preventDefault();


        // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value에 세팅하기
        if ("geolocation" in navigator) {
            /* 위치정보 사용 가능 */
            
            //현재위치 요청
            // getCurrentPosition(성공콜백, 오류 콜백)
            navigator.geolocation.getCurrentPosition((position) => {
              doSomething(position.coords.latitude, position.coords.longitude);
            });
            } else {
            /* 위치정보 사용 불가능 */
            alert('geolocation 지원 불가 = 현재 위치를 알 수 없습니다.')
            }
            function doSomething(latitude, longitude){
              let mapX = document.querySelector('input[name=mapX]');
              let mapY = document.querySelector('input[name=mapY]')
              mapX.value = longitude;
              mapY.value = latitude;
            }


        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';

        // key/value pairs 반환
        for(let pair of formData.entries()){
            console.log('pair[0] : ', pair[0]);
            console.log('pair[1] : ', pair[1]);

            parms += `${pair[0]}=${pair[1]}&`;
        }
        
        url += parms;
        console.log(url);
        
        // ES6에서 url요청 결과를 받아온다.
        fetch(url)
        
        .then(res => res.json())
        .then((json)=>{
            console.log(json);
            printCampInfo(json.response.body.items.item);

        })
        .catch((err) => console.log(err));

      
    })
    

}
// 캠핑장 정보 출력

function printCampInfo(itemArr){
    let result = document.querySelector('#result');

    result.innerHTML = '';

    result.innerHTML += '<ul>';
    // 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력한다.
    let positions = [];
    for(item of itemArr){
        result.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src = "${item.firstImageUrl}"></p>
                <p>${item.intro}</p>
                <p>${item.mapX},${item.mapY}</p>
                </li>
    
    `;
    let position = {
        title: item.facltNm,
        latlng: new kakao.maps.Lating(item.mapY,item.mapX)
    };
    positions.push(position);

   
    }
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latitude, longitude), // 마커를 표시할 위치
        title : item.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        
    });
    result.innerHTML += '</ul>';
}