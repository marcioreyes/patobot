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
    alert(resp.response);
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
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', callback(oReq));
  oReq.open(values.rest, values.url, values.async);
  oReq.send();
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
  async: false
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
    console.log(resp.response);
  });
};

var tras = function() {
  values.url = ip + '/andar/tras';
  ajax(values, function(resp) {
    console.log(resp.response);
  });
};

var direita = function() {
  values.url = "http://"+ip + '/girar/direita';
  ajax(values, function(resp) {
    console.log(resp.response);
  });
};

var esquerda = function() {
  values.url = ip + '/girar/esquerda';
  ajax(values, function(resp) {
    console.log(resp.response);
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
