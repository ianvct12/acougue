
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



var selecao = document.querySelector('.custom-select');
var opcaoSel = document.querySelector('.opcao-selec');
var seta = document.querySelector('.seta-baixo');
var lista = document.querySelector('.opcoes');


opcaoSel.addEventListener('click', function() {
  lista.classList.toggle('aberto2');
  seta.classList.toggle('rotate');
});


var opcoes = lista.querySelectorAll('li');
opcoes.forEach(function(op) {
  op.addEventListener('click', function() {
    opcaoSel.textContent = op.textContent;
     lista.classList.toggle('aberto2');
  seta.classList.toggle('rotate');
  });
});


document.addEventListener('click', function(op2) {
  if (selecao.contains(op2.target)==false) {
    lista.classList.toggle('aberto2');
  seta.classList.toggle('rotate');

  }
});







var accordion= document.querySelectorAll('.accordion-grupo');

accordion.forEach(function(item) {
  
var header = item.querySelector('.accordion-header');

var conteudo = item.querySelector('.accordion-conteudo');
  
  header.addEventListener('click', function() {
    var aberto = item.classList.contains('aberto');

    accordion.forEach(function(item) {
      item.classList.remove('aberto');
      item.querySelector('.accordion-conteudo').style.maxHeight = '0';
    });

    if (aberto==false) {
      item.classList.add('aberto');
      conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
    }
  });
});


document.querySelector('.selecTodos').addEventListener('click', function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.selecTodos)');
  var checado = this.checked;

  checkboxes.forEach(function(checkbox) {
    checkbox.checked = checado;
  });
});

var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.selecTodos)');
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    var todos = true;

    checkboxes.forEach(function(cb) {
      if (cb.checked==false) {
        todos = false;
      }
    });

    document.querySelector('.selecTodos').checked = todos;
  });
});





const botaoR = document.querySelectorAll('input[type="radio"]');

botaoR.forEach(function (radio) {
  radio.addEventListener('click', function () {
    botaoR.forEach(function (rb) {
      rb.nextElementSibling.classList.remove('rbSelec');
    });
    this.nextElementSibling.classList.add('rbSelec');
  });
});
