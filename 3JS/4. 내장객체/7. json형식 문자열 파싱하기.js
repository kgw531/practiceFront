// 버튼이 클릭되면
// json 형식 문자열을 파싱해서 화면에 출력
window.onload = function(){
    let btn = document.querySelector('#btn');
    btn.addEventListener('click',function(e){
      e.preventDefault();
          let jsonStr = `[
            {"name" : "도레미", "major" : "컴퓨터 공학", "grade" : 2},
            {"name" : "솔라시", "major" : "컴퓨터 공학", "grade" : 2},
            {"name" : "미파솔", "major" : "컴퓨터 공학", "grade" : 2}
        ]`;
        let jsObj = JSON.parse(jsonStr); 
        console.log(jsObj);
        
        for(obj of jsObj){
          console.log(obj);
          let trE = document.createElement('tr');
          let tdE1 = document.createElement('td');
          let tdE2 = document.createElement('td');
          let tdE3 = document.createElement('td');
          
          tdE1.innerHTML = `${obj.name}`
          tdE2.innerHTML = `${obj.major}`
          tdE3.innerHTML = `${obj.grade}`
  
          trE.appendChild(tdE1);
          trE.appendChild(tdE2);
          trE.appendChild(tdE3);
          
          let tbody = document.querySelector('#attendant > tbody');
          tbody.appendChild(trE);
        }

    })

  }
  