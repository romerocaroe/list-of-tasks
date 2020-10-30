<template>
    <div class="grid">
        
        <navComponent></navComponent>

        <vs-row w="12" justify="center" class="header">
            <vs-col w="12" xs="12">
                <br>
                <br>
                <br>
            </vs-col>
            <vs-col w="1" xs="12"><br/></vs-col>
            <vs-col w="2" xs="12" vs-type="flex">
            </vs-col>
        </vs-row>
        <br>
        <vs-row w="12" justify="center" class="header">
            <vs-col w="2" xs="12" vs-type="flex">
                <br/>
                <tareasFiltrar v-model="filtro"></tareasFiltrar>
                <br/>
                <tareasNuevas @nuevaTarea="agregarTarea"></tareasNuevas>
                <br/>
                <div class="info">
                    <p>Tareas Vigentes: {{obtenerTareasVigentes}}</p>
                    <p>Tareas Eliminadas: {{contadorEliminadas}}</p>
                    <p>Tareas Totales: {{obtenerTareasTotales}}</p>
                </div>
            </vs-col>
            <vs-col w="1" xs="12"><br/></vs-col>
            <vs-col w="6" xs="12">
                <tareasListar :tareas="obtenerTareasFiltradas" @eliminar-tarea="removerTarea" @editar-tarea="editarTarea"></tareasListar>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import tareasListar from './TareasListar';
import tareasNuevas from './TareasNueva';
import tareasFiltrar from './TareasFiltrar';
import navComponent from '../nav/Nav';
import 'material-icons/iconfont/material-icons.css';

export default {
    name:'Tareas',
    components:{
        tareasListar,
        tareasNuevas,
        tareasFiltrar,
        navComponent,
    },
    computed: {
        obtenerTareasFiltradas(){
            return this.tareas.filter(tarea => tarea.toLowerCase().indexOf(this.filtro) !== -1);
        },
        obtenerTareasVigentes(){
            return this.tareas.length;
        },
        obtenerTareasTotales(){
            return this.tareas.length + this.contadorEliminadas;
        }
    },
    data(){
        return {
            page: 1,
            max: 5,
            tareas: ['Comprar comida','Hacer curso de inglés','Arreglar ventana','Conseguir cuaderno','Llamar médico','Cargar sube'],
            filtro:'',
            contadorEliminadas:0
        }
    },
    methods: {
        agregarTarea(tarea){
            this.tareas.push(tarea);
        },
        removerTarea(index){
            this.tareas.splice(index,1);
            this.contadorEliminadas++;
        },
        editarTarea(index,texto){
            this.$set(this.tareas,index,texto);
        }
    }
}
</script>

<style scoped>
.info{
    background-color: #EFF2F7;
    border-radius: 10px;
    text-align: center;
    padding: 4px;
    color: #5A6371;
}
</style>