const datos=[
    ]

const app = Vue.createApp({
    
    methods: {
       agregarFrase() {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.hobby);
        const nuevaFrase={
            nombre: this.nombre,
            apellido: this.apellido,
            hobby: this.hobby
        }

        this.listadatos.unshift(nuevaFrase);
       },
       agregarFraseFinal() {
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.hobby);
        const nuevaFrase={
            nombre: this.nombre,
            apellido: this.apellido,
            hobby: this.hobby
        }

        this.listadatos.push(nuevaFrase);
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
          listadatos:datos,
          nombre:null,
          //autor:'sin autor'
          apellido:null,
          hobby:null
        }
    }
})
 
app.mount('#myFormulario')

