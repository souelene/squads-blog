function integrantes(id, nombre, apellido, edad, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies;
}

var consola = [];
var pola = new integrantes("Paola", "Urra", 28, ["Dormir", "Ver Netflix", "Jugar xbox"]);
var vane = new integrantes("Vanessa", "Pérez", 30, ["Karate do", "Cantar y pasarla bien", "Disfrutar a mis 6 hijos"]);
var katy = new integrantes('Katerine', 'Sandoval', 24, ['Arte', 'Música', 'Literatura']);
var pauli = new integrantes('Paulina', 'Gonzalez', 26, ['Jugar videojuegos', 'Ver anime/series', "Hacer manualidades y sacar la vuelta"]);
var mina= new integrantes("Romina", "Torres", 31, ["Componer, cantar, tocar bateria, bajo y guitarra", "Ver netflix", "Hacer cosas chori con mi hijo y esposo"]);
var nat = new integrantes("Natalia", "Garrido", 27, ["Animales", "Comida", "Series"]);
var naty = new integrantes("Natalia", "Vivanco", 27, ["Leer", "Manualidades", "Jardinear"]);
var cony = new integrantes("Contanza ", "Ivett", 23, ["Usar audifonos", "perrear", "comer"]);
var yo = new integrantes("Sou-elene", "Cruces", 33, ["Cantar", "salir con mis perros", "Dormir"]);
 
 consola.push(pola, vane, katy, pauli, mina, nat, naty, cony, yo );

function dibujar() {
    var contenedor = document.getElementById("caja");
    var contenido = '';
    miSquad.forEach(function(member) {

        contenido +=
            '<div class="persona">' +
            '<strong>Nombre:</strong> ' + member.nombre + ' ' + member.apellido +
            '<br>' +
            '<strong>Edad:</strong> ' + member.edad +
            '<br>' +
            '<br>' +
            '<strong>Hobbies</strong>' +
            '<ul class="persona">';

        member.hobbies.forEach(function(hobbie) {
            contenido += '<li>' + hobbie + '</li>';
        });

        contenido += '</ul></div><br>';

        console.log(member);
    });

    contenedor.innerHTML = contenido;
}

dibujar();