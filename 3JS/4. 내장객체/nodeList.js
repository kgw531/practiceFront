window.onload = function(){
    btn1.addEventListener('click',function(){
      let javaE = document.createElement('p');
      let oracleE = document.createElement('p');
      let jsp_servE = document.createElement('p');
      let springE = document.createElement('p');

      let java_text = document.createTextNode('Java');
      let oracle_text = document.createTextNode('Oracle');
      let jsp_serv_text = document.createTextNode('jsp/servlet');
      let spring_text = document.createTextNode('spring');
      
      javaE.appendChild(java_text);
      oracleE.appendChild(oracle_text);
      jsp_servE.appendChild(jsp_serv_text);
      springE.appendChild(spring_text);

      let body = document.querySelector('body');
      let p1 = document.querySelectorAll('p')[0];
      let p2 = document.querySelectorAll('p')[2];

      body.insertBefore(javaE,p1);
      body.insertBefore(oracleE,p1);

      body.appendChild(jsp_servE);
      body.appendChild(springE);
    })

    btn2.addEventListener('click',function(){
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');

        let javaN = document.createTextNode("java");
        let oracleN = document.createTextNode('oracle');

        li1.appendChild(javaN);
        li2.appendChild(oracleN);

        let ul = document.querySelector('ul');
        let li3 = document.querySelectorAll('li')[0];

        ul.insertBefore(li1,li3);
        ul.insertBefore(li2,li3);
    })

}