
document.getElementById("bt1").addEventListener("click", validarFormulario);


function validarFormulario() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telef = document.getElementById("telef");
  var checkM = document.getElementById("masculino");
  var checkF = document.getElementById("feminino");
  var checkN = document.getElementById("naoInformado");

  var indArroba = email.value.indexOf("@");
  var indPonto = email.value.indexOf(".");

  var checkBov = document.getElementById("bovinas");
  var checkAve = document.getElementById("aves");
  var checkSui = document.getElementById("suinas");
  var checkExo = document.getElementById("exoticas");

  var checkPfr1 = document.getElementById("pfr1");
  var checkPfr2 = document.getElementById("pfr2");
  var checkPfr3 = document.getElementById("pfr3");
  var checkPfr4 = document.getElementById("pfr4");
  if (nome.value.length < 7) {
    alert("Nome inválido")
  }
  else if (indPonto - indArroba== 1||indPonto==-1||indArroba==-1) {
    alert("E-mail inválido")
  }
  else if (telef.value.length > 12||telef.value.length<8) {
    alert("Telefone inválido")
  }
  else if (checkM.checked == false && checkF.checked == false && checkN.checked == false) {
    alert("Selecione uma opção")
}
  else if (checkBov.checked == false && checkAve.checked == false && checkSui.checked == false && checkExo.checked==false){
    alert("Selecione uma preferência");
}
  else if(checkPfr1.checked == false && checkPfr2.checked == false && checkPfr3.checked == false && checkPfr4.checked==false){
    alert("Selecione um meio de comunicação")
}
  else {
    alert("Cadastrado com sucesso")
  }
}

