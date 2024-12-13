const datos=[
    ]

const app = Vue.createApp({
    
    methods: {
      
       
        guardarDatosFinal() {
        
        const nuevosDatos={
            nombre: this.nombre,
            apellido: this.apellido,
            hobby: this.hobby,
            fechaNac: this.fechaNac
        }

        this.listadatos.push(nuevosDatos);
        this.nombre = null;
        this.apellido = null;
        this.hobby = null;
        this.fechaNac = null;
       }
       
    },
    data(){
        return{
          listadatos:datos,
          nombre:null,
          //autor:'sin autor'
          apellido:null,
          hobby:null,
          fechaNac:null
        }
    }
})
 
app.mount('#idMyFormulario')

