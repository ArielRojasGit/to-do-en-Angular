import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit(): void {
    const lista = document.getElementById("lista") as HTMLElement;
    const tareaInput = document.getElementById("tarea") as HTMLInputElement;
    const btnTarea = document.getElementById("btn-agregar") as HTMLButtonElement;
    const botonMas1 = document.getElementById("al2") as HTMLButtonElement;
    const tareaEnColumna = document.getElementById("lista") as HTMLElement;
    const columna2 = document.getElementById("lista2") as HTMLElement;

    const moverTarea = function() {
      const aMover = tareaEnColumna;
      const tareaMovida = document.createElement("li");
      const enlace2 = document.createElement("a");

      enlace2.appendChild(aMover);
      enlace2.setAttribute("href", "#");
      tareaMovida.appendChild(enlace2);
      columna2.appendChild(aMover);
    };

    const agregarTarea = () => {
      const tarea = tareaInput.value;
      const nuevaTarea = document.createElement("li");
      const enlace = document.createElement("a");
      const contenido = document.createTextNode(tarea);

      if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agregar tarea válida");
        tareaInput.className = "error";
        return false;
      }

      // Agregamos contenido al enlace
      enlace.appendChild(contenido);
      // Ponemos un href
      enlace.setAttribute("href", "#");
      // Agregamos enlace a la nueva tarea
      nuevaTarea.appendChild(enlace);
      // Agregamos la nueva tarea a la lista de tareas
      lista.appendChild(nuevaTarea);

      tareaInput.value = "";

      for (let i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", () => {
          this.parentNode.removeChild(this);
        });
      }
    };

    const comprobarInput = function() {
      tareaInput.className = "";
      tareaInput.setAttribute("placeholder", "agregar tarea");
    };

    const eliminarTarea = () => {
      this.parentNode.removeChild(this);
    };

    // Agregar eventos
    btnTarea.addEventListener("click", agregarTarea);
    botonMas1.addEventListener("click", moverTarea);
    tareaInput.addEventListener("click", comprobarInput);

    // Borrar elementos de la lista
    for (let i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", eliminarTarea);
    }
  }
}










// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard-page',
//   templateUrl: './dashboard-page.component.html',
//   styleUrls: ['./dashboard-page.component.scss']
// })

// export class DashboardPageComponent implements OnInit {
  
//   constructor() { }
//   ngOnInit(): void {
//   }
// }
