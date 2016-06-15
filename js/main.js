


window.addEventListener("load", init);
 
var todos = [];
 
function init()
{
	var add = document.querySelector("#add");
	add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
	//prevenimos el evento del enlace
	event.preventDefault();
	//comprobamos que tenga texto
	if(document.querySelector("#Mensaje").value === "") return;
 
	//creamos el objeto con la información del p
	var p = 
	{
		index: todos.length + 1,
		value: document.querySelector("#Mensaje").value
	};
	todos.push(p);
	displayTodos(p);
}
 
function displayTodos(p)
{
	//creamos el elemento p
    var node = document.createElement("p");
    enlace = document.createElement("a");
    node.classList.add("col-md-12");

    node.id = "Mensaje"+p.index;
 
    //creamos el contenido del elemento p
	var textnode = document.createTextNode(p.value);    
	node.appendChild(textnode);  
	document.querySelector("#messages").appendChild(node); 
	document.querySelector("#Mensaje").value = "";


	//añadimos el botón
	var deleteButton = createButton(p);
    node.appendChild(deleteButton);
}




/*SEARCH INPUT*/

function doSearch()
		{
			var tableReg = document.getElementById('datos');
			var searchText = document.getElementById('search').value.toLowerCase();
			var cellsOfRow="";
			var found=false;
			var compareWith="";
 
			// Recorremos todas las filas con contenido de la tabla
			for (var i = 1; i < tableReg.rows.length; i++)
			{
				cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
				found = false;
				// Recorremos todas las celdas
				for (var j = 0; j < cellsOfRow.length && !found; j++)
				{
					compareWith = cellsOfRow[j].innerHTML.toLowerCase();
					// Buscamos el texto en el contenido de la celda
					if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
					{
						found = true;
					}
				}
				if(found)
				{
					tableReg.rows[i].style.display = '';
				} else {
					// si no ha encontrado ninguna coincidencia, esconde la
					// fila de la tabla
					tableReg.rows[i].style.display = 'none';
				}
			}
		}



//BUSCA Y REMPLAZA
$('.contenedor-contactos').click(function() {
  var data = $(this).attr('data')
  var fotos = ["gian", "jose", "katy", "andrea", "aldo", "mariapaula", "raymi", "rodulfo", "anamaria"];
  var nombres = ["Gian", "Jose", "Katy", "Andrea", "Aldo", "Maria Paula", "Raymi", "Rodulfo", "Ana Maria"];
  $('#foto').html('<img class="media-object avatar" src="image/' +fotos[data]+ '.jpg" alt="...">');
  $('#nombres').html('<p class= "nombre">' +nombres[data]+ '</p>');
  $('#box-message').html('');
});





 





