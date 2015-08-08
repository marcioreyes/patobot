  var ip = 'http://192.168.1.2:5000';

  var values = {
    url: '',
    rest: 'GET',
    async: false
  };

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
    values.url = ip + '/girar/direita';
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


  var ajax = function(values, callback) {

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', callback(oReq));
    oReq.open(values.rest, values.url, values.async);
    oReq.send();

  };
