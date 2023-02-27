(function(){ //función autoinvocada

    var lista           = document.getElementById("lista")
    var tareaInput      = document.getElementById("tarea")
    var btnTarea        = document.getElementById("btn-agregar") 
    
    var botonMas1       = document.getElementById("al2")
    var tareaEnColumna  = document.getElementById("lista")
    var columna2        = document.getElementById("lista2")
    
    
    
    //funciones
    var moverTarea = function(){
    var aMover = tareaEnColumna;
    var tareaMovida = document.createElement("li")
        enlace2 = document.createElement("a")
        
    
        enlace2.appendChild(aMover)
        enlace2.setAttribute("href","#")
        tareaMovida.appendChild(enlace2)
        columna2.appendChild(aMover)
    }
    
    var agregarTarea = function(){
        var tarea       = tareaInput.value
            nuevaTarea  = document.createElement("li")
            enlace      = document.createElement("a")
            contenido   = document.createTextNode(tarea)
    
            if (tarea == ""){
                tareaInput.setAttribute("placeholder","Agregar tarea válida")
                tareaInput.className     = "error";
                return false;
            }
    
            //Agregamos contenido al enlace
            enlace.appendChild(contenido);
            //ponemos un href
            enlace.setAttribute("href","#");
            //agregamos enlace a la nueva tarea
            nuevaTarea.appendChild(enlace);
            //Agregamos la nueva tarea a la lista de tareas
            lista.appendChild(nuevaTarea);
    
            tareaInput.value = "";
    
    
            for(var i = 0; i<=lista.children.length-1;i++){
                lista.children[i].addEventListener("click",function(){
                    this.parentNode.removeChild(this)
                })
            }
    
    };
    
    var comprobarInput  = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "agregar tarea");
    };
    
    var eliminarTarea = function(){
        this.parentNode.removeChild(this)
    };
    
    
    
    //ahora los EVENTOS
    //agregar Tarea
    btnTarea.addEventListener("click",agregarTarea);
    botonMas1.addEventListener("click",moverTarea);
    
    //comprobar input
    tareaInput.addEventListener("click",comprobarInput);
    
    //borrado elementos de la lista
    for(var i = 0; i<= lista.children.length -1; i++){
        lista.children[i].addEventListener("click", eliminarTarea);
    }
    }())