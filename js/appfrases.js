const frases=[
    {frase:'El que madruga, Dios le ayuda',autor:'pepito perez'},
    {frase:'El que ayuna, Dios no le ayuda',autor:'pepa pig'},
    {frase:'El que suma, Dios creo que le ayuda',autor:'papito Dios'},
    {frase:'El que roba, Dios le ayuda?',autor:'pepe pericles'},
    {frase:'El que es gei, Dios le ignora',autor:'pancho villareal'},
    {frase:'El que publica, Dios le manda un what',autor:'pe causa'}]

const app = Vue.createApp({
    
    methods:{
       
    },
    data(){
        return{
          listafrases:frases
        }
    }
})
 
app.mount('#myApp')


