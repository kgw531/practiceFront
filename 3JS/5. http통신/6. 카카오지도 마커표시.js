
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 현재위치
if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */
        
        //현재위치 요청
        // getCurrentPosition(성공콜백, 오류 콜백)
        navigator.geolocation.getCurrentPosition((position) => {
          doSomething(position.coords.latitude, position.coords.longitude);
        },(err)=>console.log(err));
        } else {
        /* 위치정보 사용 불가능 */
        alert('geolocation 사용 불가능!')
        }

function doSomething(latitude,longitude){
    // 현재 위치 정보를 지도에 세팅 - 중심좌표, 마커

    // 마커 포지션(위도와 경도) 생성
    var markerPosition  = new kakao.maps.LatLng(latitude, longitude); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map : map,
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(markerPosition);      
}