/*-----------------------
----------CONSTRUTOR-----
-------------------------*/
var localStorage = verificaStorage();
var padrao = '192.168.1.2:5000';

function verificaStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

function verificaArduinoConectado(){
  values.url = ip + '/';
  ajax(values, function(resp) {
    alert(resp);
  });
}

function mudarIp(){
  var ipMudanca = prompt("Insira um ip com a porta. Ex: 192.168.1.2:5000", ip);

  if (ipMudanca !== null) {
    ip = ipMudanca;
    localStorage['ip'] = ip;
  }
}

function ajax(values, callback) {
  var oReq = new XMLHttpRequest({mozSystem:true});
  oReq.onreadystatechange=function()
  {
    if (oReq.readyState==4 && oReq.status==200){
        callback(oReq.responseText);
    }
  }
  oReq.open(values.rest, 'http://'+values.url, values.async);
  oReq.send(null);

}

/*-----------------------
------FIM CONSTRUTOR-----
-------------------------*/

/*-----------------------
-------- INIT -----------
-------------------------*/

var ip = '';

if(localStorage){
  if(localStorage['ip']){
    ip = localStorage['ip'];
  } else {
    ip = padrao;
    mudarIp();
  }
} else {
  ip = padrao;
  mudarIp();
}

var values = {
  url: '',
  rest: 'GET',
  async: true
};

/*-----------------------
--------FIM INIT --------
-------------------------*/

/*-----------------------
--------MOVIMENTOS-------
-------------------------*/

var frente = function() {
  values.url = ip + '/andar/frente';
  ajax(values, function(resp) {
    console.log(resp);
  });
};

var tras = function() {
  values.url = ip + '/andar/tras';
  ajax(values, function(resp) {
    console.log(resp);
  });
};

var direita = function() {
  values.url = ip + '/girar/direita';
  ajax(values, function(resp) {
    console.log(resp);
  });
};

var esquerda = function() {
  values.url = ip + '/girar/esquerda';
  ajax(values, function(resp) {
    console.log(resp);
  });
};

/*-----------------------
--------FIM MOVIMENTOS---
-------------------------*/

/*-----------------------
--------OUTRAS ACOES-------
-------------------------*/

var limparDados = function(){
  var resposta = confirm("Deseja limpar informações de IP?");
  if (resposta) {
    localStorage.clear();
  }
}
