onLoad();

//Função principal
function onLoad() {
  //Cria o array de pessoas
  let jogos = [];

  //Cria a pessoa 1
  let lol = {
    nome: 'lol',
    faixaEtaria: 18,
    tamanho: 8
  };
  
  //Cria a pessoa 2
  let minecraft = {
    nome: 'minecraft',
    faixaEtaria: 25,
    tamanho: 2
  };

  //Cria a pessoa 3
  let rust = {
    nome: 'Rust',
    faixaEtaria: 10,
    tamanho: 16
  };


  jogos.push(lol);
  jogos.push(minecraft);
  jogos.push(rust);

  

  jogos.sort(ordenarPorfaixaEtaria);

  imprimirArray('spanOrdenadaPorfaixaEtaria', jogos);
}

function ordenarPorfaixaEtaria(a, b){
return a.faixaEtaria - b.faixaEtaria;
}

function imprimirArray(id, array) {
  let span = document.getElementById(id);
  span.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    span.innerHTML += array[i].nome + ' = faixa Etaria ' + array[i].faixaEtaria + ', requerido ' + array[i].tamanho + ' gigas<br>';
  }
}


var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];


function renderTodos() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");

        linkElement.setAttribute("href", "#");

        var pos = todos.indexOf(todo);

        linkElement.setAttribute("onclick", "DeleteTodo(" + pos + ")")

        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function DeleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("list_todos", JSON.stringify(todos));
}

