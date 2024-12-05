
console.log(Vue);
const app = Vue.createApp({
    //template:`
    //<h1>Hola mundo</h1>
    //<p>Con Vue.JS</p>
    //<p>{{1+2}}</p>
    //<p>{{[1,2,3,4,5,6,7]}}</p>
    //<p>{{ {nombre:'Jhon',apellido:'Arteaga'} }}</p>
    //<p>{{true? 'Activo':'Inactivo' }}</p>
    //<p>1===1</p>
    //<p>{{1===1 }}</p>
    //`
    //Options API
    methods:{
        cambiarMensaje(){
            this.mensaje='Angular ya no es top 1';
            this.edad=30;
        }
    },
    data(){
        return{
            mensaje: 'hola Mundo Pweb',
            edad:35
        }
    }
})
 
app.mount('#myApp')


