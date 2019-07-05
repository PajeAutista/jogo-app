onLoad();

//Função principal
function onLoad() {
  //Cria o array de pessoas
  let pessoas = [];

  //Cria a pessoa 1
  let pessoa1 = {
    nome: 'João',
    idade: 18
  };
  
  //Cria a pessoa 2
  let pessoa2 = {
    nome: 'Paulo',
    idade: 25
  };

  //Cria a pessoa 3
  let pessoa3 = {
    nome: 'Julio',
    idade: 10
  };

  //Adiciona as 3 pessoas no array de pessoas
  pessoas.push(pessoa1);
  pessoas.push(pessoa2);
  pessoas.push(pessoa3);

  
  //Ordena as pessoas de acordo com a idade da pessoa.
  pessoas.sort(ordenarPorIdade);
  
  //Imprime o array ordenado por idade
  imprimirArray('spanOrdenadaPorIdade', pessoas);
}

function ordenarPorIdade(a, b){
return a.idade - b.idade;
}

function imprimirArray(id, array) {
  let span = document.getElementById(id);
  span.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    span.innerHTML += array[i].nome + ', idade ' + array[i].idade + ' anos.<br/>';
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