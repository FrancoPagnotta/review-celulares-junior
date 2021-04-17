class celular{
    constructor(marca,modelo,color,peso,resolucionPantalla,resolucionCamara,ram){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false;
    }

    botonEncendido(){
        if (this.encendido == false){ 
            this.encendido = true;
            alert("celular prendido");
        } else {
            alert("celular apagado");
        }
    }

    reiniciar(){
        if (this.encendido == true){ 
            alert("reiniciando celular");
        } else { 
            alert("el celular está apagado");
        }
    }    

    tomarFoto(){
        alert(`foto tomada en un resolucion de ${this.resolucionCamara}`);
    }

    grabarVideo(){
        alert(`video grabado en una resolucion de ${this.resolucionCamara}`);
    }
    
    verInfo(){
        return `
        marca: <b>${this.marca}</b></br>
        modelo: <b>${this.modelo}</b></br>
        color: <b>${this.color}</b></br>
        peso: <b>${this.peso}</b></br>
        resolucion de pantalla: <b>${this.resolucionPantalla}</b></br>
        resolucion de camara: <b>${this.resolucionCamara}</b></br>
        memoria ram: <b>${this.ram}</b></br>
        `
    }
}

class celularAltaGama extends celular{
    constructor(marca,modelo,color,peso,resolucionPantalla,resolucionCamara,ram,camaraExtra){
        super(marca,modelo,color,peso,resolucionPantalla,resolucionCamara,ram);
        this.camaraExtra = camaraExtra;
    }

    camaraLenta(){
        alert("estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama(){
        return this.verInfo() + `camara extra: <b>${this.camaraExtra}</b></br>`
    }
}


const celular1 = new celular("iphone","12","plateado","200gr","1.792 x 828 píxeles","12 megapixeles", "4gb ram");
const celular2 = new celular("samsung","s20","negro","180gr","3.040 x1.440 pixeles","12 megapixeles","12gb ram");
const celular3 = new celular("xiaomi","redmi note 9","rosa","200gr","1080 x 2340 pixeles","12 megapixeles","4gb ram");
const celular4 = new celularAltaGama("iphone","20","negro","200gr","4k","20 megapixeles","16gb ram","slow motion camera");
const celular5 = new celularAltaGama("xiaomi","redmi note 10","gris","250gr","2k","20 megapixeles","16gb ram","slow motion camera");


celular4.botonEncendido();
celular4.tomarFoto();
celular4.grabarVideo();
celular4.camaraLenta();
celular4.reconocimientoFacial();
celular4.reiniciar(); 


document.write(`
    ${celular1.verInfo()} <br>
    ${celular2.verInfo()} <br>
    ${celular3.verInfo()} <br>
    ${celular4.infoAltaGama()} <br>
    ${celular5.infoAltaGama()} <br>
`);
