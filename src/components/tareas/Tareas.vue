<template>
    <div class="grid">
        
        <navComponent></navComponent>

        <vs-row w="12" justify="center" class="header">
            <vs-col w="12" xs="12">
                <br>
                <br>
                <br>
            </vs-col>
            <vs-col w="6" xs="12" vs-type="flex">
                <tareasListar :tareas="tareas" @eliminar-tarea="removerTarea" @editar-tarea="editarTarea"></tareasListar>
            </vs-col>
            <vs-col w="1" xs="12"><br/></vs-col>
            <vs-col w="2" xs="12" vs-type="flex">
                <br/>
                <tareasNuevas @nuevaTarea="agregarTarea"></tareasNuevas>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import tareasListar from './TareasListar';
import tareasNuevas from './TareasNueva';
import navComponent from '../nav/Nav';
import 'material-icons/iconfont/material-icons.css';

export default {
    name:'Tareas',
    components:{
        tareasNuevas,
        navComponent,
        tareasListar
    },
    data(){
        return {
            page: 1,
            max: 5,
            tareas: ['Aprender Vue','Aprender Vuex','Aprender Vuetify'],
        }
    },
    methods: {
        agregarTarea(tarea){
            this.tareas.push(tarea);
        },
        removerTarea(index){
            this.tareas.splice(index,1);
        },
        editarTarea(index,texto){
            this.$set(this.tareas,index,texto);
        }
    }
}
</script>

<style scoped>

</style>