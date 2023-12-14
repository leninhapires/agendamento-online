/*validando inputs*/



let nome = document.querySelector("#nome");
let labelnome = document.querySelector("#labelnome");
let validnome = false;

let sobrenome = document.querySelector("#sobrenome");
let labelsobrenome = document.querySelector("#labelsobrenome");
let validsobrenome = false;

let email = document.querySelector("#email");
let labelemail = document.querySelector("#labelemail");
let validemail = false;

let telefone = document.querySelector("#telefone");
let labeltelefone = document.querySelector("#labeltelefone");
let validtelefone = false;

let data = document.querySelector("#data");
let labeldata = document.querySelector("#labeldata");
let validdata = false;

let horario = document.querySelector("#horario");
let labelhorario = document.querySelector("#labelhorario");
let validhorario = false;

let msgError = document.querySelector("#msgError");
let msgSuces = document.querySelector("#msgSuces");

let btn = document.querySelector("#btn");

btn.addEventListener("click", agendar);


nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelnome.setAttribute("style", "color: red");
    labelnome.innerHTML = "*Insira no minimo 3 caracteres";
    nome.setAttribute("style", "background:red");
    validnome = false;
  } else {
    labelnome.setAttribute("style", "color:blue");
    labelnome.innerHTML = "Nome";
    nome.setAttribute("style", "background:pink");
    validnome = true;
  }
});

sobrenome.addEventListener("keyup", () => {
  if (sobrenome.value.length <= 2) {
    labelsobrenome.setAttribute("style", "color: red");
    labelsobrenome.innerHTML = "*Insira no minimo 3 caracteres";
    sobrenome.setAttribute("style", "background:red");
   validsobrenome = false;
  } else {
    labelsobrenome.setAttribute("style", "color:blue");
    labelsobrenome.innerHTML = "Sobrenome";
    sobrenome.setAttribute("style", "background:pink");
   validsobrenome = true;
  }
});

email.addEventListener("keyup", () => {
  if (email.value.length <= 15) {
    labelemail.setAttribute("style", "color: red");
    labelemail.innerHTML = "email *Insira um email valido";
    email.setAttribute("style", "background:red");
    validemail = false;
  } else {
    labelemail.setAttribute("style", "color:blue");
    labelemail.innerHTML = "email";
    email.setAttribute("style", "background:pink");
    validemail = true;
  }
});

telefone.addEventListener("keyup", () => {
  if (telefone.value.length >= 14) {
    labeltelefone.setAttribute("style", "color: red");
    labeltelefone.innerHTML = "telefone *Insira um telefone valido";
    telefone.setAttribute("style", "background:red");
    validtelefone = false;
  } else {
    labeltelefone.setAttribute("style", "color:blue");
    labeltelefone.innerHTML = "telefone";
    telefone.setAttribute("style", "background:pink");
    validtelefone = true;
  }
});

data.addEventListener("keyup", () => {
  if (data.value.length >= data) {
    labeldata.setAttribute("style", "color: red");
    labeldata.innerHTML = "data *Insira uma data valida";
    data.setAttribute("style", "background:red");
    validdata = false;
  } else {
    labeldata.setAttribute("style", "color:blue");
    labeldata.innerHTML = "data";
    data.setAttribute("style", "background:pink");
    validdata = true;
  }
});

horario.addEventListener("keyup", () => {
  if (horario.value.length >= horario) {
    labelhorario.setAttribute("style", "color: red");
    labelhorario.innerHTML = "horario *Insira um horario valido";
    horario.setAttribute("style", "background:red");
    validhorario = false;
  } else {
    labelhorario.setAttribute("style", "color:blue");
    labelhorario.innerHTML = "horario";
    horario.setAttribute("style", "background:pink");
    validhorario = true;
  }
});

/*validando botao*/

function agendar() {
    if (
      validnome &&
      validsobrenome &&
      validemail && 
      validtelefone &&
      validdata &&
      validhorario
    ) {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
  
      listaUser.push({
        nomeCad: nome.value,
        sobrenomeCad: sobrenome.value,
        emailCad: email.value,
        telefoneCad: telefone.value,
        dataCad: data.value,
        horaCad: horario.value,
      });
  
      localStorage.setItem("listaUser", JSON.stringify(listaUser));
  
      msgSuces.style.display = "block";
      msgSuces.innerHTML = "Registrando agendamento...";
      msgError.style.display = "none";
      msgError.innerHTML = "";
      
      setTimeout(() => {
        window.location.href = "confirma.html";  
      }, 2000);
    } else {
      msgError.style.display = "block";
      msgError.innerHTML = "Preencha os campos corretamente";
      msgSuces.style.display = "none";
      msgSuces.innerHTML = "";
    
    }
  }
function registrar(){
    document.getElementById('btn').addEventListener('click', agendar);

}

function cadastrar(){
  localStorage.getItem(listaUser.value);
  var localsto = localStorage.getItem(listaUser.value);
  document.body.querySelector("#minhadiv").innerHTML = localsto;
}