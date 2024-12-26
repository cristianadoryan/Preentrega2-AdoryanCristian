let nombre = prompt ("Bienvenidos a Parfums de L'âme, como es tu nombre?");
alert("muy buenos dias " + nombre);

const perfumes = function(marca, mililitros, concentracion, precio, stock){
    this.marca=marca
    this.mililitros=mililitros
    this.concentracion=concentracion
    this.precio=precio
    this.stock=stock
}

let perfume1 = new perfumes("dior sauvage",100,"edt",250000,15)
let perfume2 = new perfumes("versace dylan blue",200,"edt",280000,20)
let perfume3 = new perfumes("chanel allure homme",100,"edt",260000,12)
let perfume4 = new perfumes("jean paul gaultier scandal",100,"edp",210000,18)
let perfume5 = new perfumes("polo blue",120,"edp",240000,25)
let perfume6 = new perfumes("givenchi gentleman",100,"edt intense",230000,30)
let perfume7 = new perfumes("yves saint laurent myself",100,"edt",250000,18)
let perfume8 = new perfumes("rabanne phantom",100,"edt",210000,30)

let lista = [perfume1,perfume2,perfume3,perfume4,perfume5,perfume6,perfume7,perfume8]


function menu() {    
    let Opciones;
    do {
        Opciones = prompt("Que quieres hacer?\n"+
            "\n"+
            "1. agregar un producto\n"+
            "2. buscar un producto \n"+
            "\n"+
            "0. Presione para salir");

        switch (Opciones) {
            case "1":
                function agregarProducto(){
                    let marca = prompt("ingresa la marca del producto")
                    let mililitros = parseInt(prompt("ingresa los mililitros del producto"))
                    let concentracion = prompt("ingresa la concentracion del producto")
                    let precio = parseInt(prompt("ingresa el precio del producto"))
                    let stock = parseInt(prompt("ingresa el stock del producto"))
                
                    if(isNaN(precio)||isNaN(stock)||marca==null||concentracion==null||isNaN(mililitros)){
                        alert("por favor ingrese valores adecuados")
                        return
                    }
                
                    let perfume=new perfumes(marca,mililitros,concentracion,precio,stock)
                
                    lista.push(perfume)
                
                    console.table(lista)
                }
                
                agregarProducto()
                break;
            case "2":
                function filtrarPerfume(){
                    let palabraClave=prompt("ingresa el perfume que buscas")
                    let resultado=lista.filter((x)=>x.marca.toLowerCase().includes(palabraClave))
                
                    if (resultado.length >0){
                        console.table(resultado)
                    }else{
                        alert("no se encontro tu perfume")
                    }
                }
                
                filtrarPerfume()
                break;
            default:
                alert("vuelve a ingresar una opcion");
        } 

        let seguir = prompt("¿Quieres realizar alguna otra acción si o no?");

        if (seguir !== null && seguir.toLowerCase() == "no") {
            alert("Gracias por elegirnos que tengas hermoso dia");
            break
        }
    } while (true);
}

menu();