const frases=[
    {frase:'El que madruga, Dios le ayuda',autor:'pepito perez'},
    {frase:'El que ayuna, Dios no le ayuda',autor:'pepa pig'},
    {frase:'El que suma, Dios creo que le ayuda',autor:'papito Dios'},
    {frase:'El que roba, Dios le ayuda?',autor:'pepe pericles'},
    {frase:'El que es gei, Dios le ignora',autor:'pancho villareal'},
    {frase:'El que publica, Dios le manda un what',autor:'pe causa'}]

const app = Vue.createApp({
    
    methods: {
       agregarFrase() {
        console.log(this.frase);
        console.log(this.autor);
        const nuevaFrase={
            frase: this.frase,
            autor: this.autor
        }

        this.listafrases.unshift(nuevaFrase);
       },
       agregarFraseFinal() {
        console.log(this.frase);
        console.log(this.autor);
        const nuevaFrase={
            frase: this.frase,
            autor: this.autor
        }

        this.listafrases.push(nuevaFrase);
       },
       eventoKeyPress({chartCode,cancelable,key,keyCode,target}){
        if(key==="Enter"){
        console.log('Evento');
        //console.log(event);
        console.log(chartCode);
        console.log(cancelable);
        console.log(key);
        console.log(keyCode);
        console.log(target.baseURI);
        this.agregarFraseFinal();
        }
       },
       eventoKeyPressModificador(){
        
        console.log('Evento');
        //console.log(event);
        this.agregarFraseFinal();
        
       }
    },
    data(){
        return{
          listafrases:frases,
          frase:null,
          //autor:'sin autor'
          autor:null
        }
    }
})
 
app.mount('#myApp')


