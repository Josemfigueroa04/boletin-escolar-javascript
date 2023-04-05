let array = [7,4,8,9,6];

function listarNotas(){
    let listar= document.getElementById("listaNotas");

    for(let nota of array){
        let item= document.createElement("li")
        item.innerText= nota;
        listar.appendChild(item);
    }
}

function calcularPromedio(){
    let suma=0;
    for(i=0; i<5 ; i++){
        suma= suma + array[i];    }
    let promedio= suma/array.length;
    
    document.getElementById("promedio").textContent= promedio

}

function notaMasAlta(){
    let notaAlta=0;
    for(i=0; i<5 ; i++){
        if(array[i]>notaAlta){
            notaAlta= array[i];
        }
    }
    document.getElementById("nota").textContent= notaAlta
}

function hayAplazo(){
    let aplazo="No";
    for(i=0; i<5 ; i++){
        if(array[i]<4){
            aplazo= "SI";
        }
    }
    if(aplazo){
        document.getElementById("aplazo").textContent= "Hay aplazos"
    }else{
        document.getElementById("aplazo").textContent= "No hay aplazos"
    }
}