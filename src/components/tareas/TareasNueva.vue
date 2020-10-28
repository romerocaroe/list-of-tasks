<template>
    <vs-row w="12" justify="center">
        <vs-col>
            <vs-input
                label-placeholder="Nueva Tarea:"
                v-model="tarea"
                @keyup.enter="agregarTarea()"
            />
            <br/>
            <vs-button 
                gradient
                :active="active == 0" 
                @click="active = 0,agregarTarea()"
            >
                Agregar
            </vs-button>
            <br/>
            <v-card>
                
            </v-card>

        </vs-col>
    </vs-row>
</template>

<script>
export default {
    name:'TareasNueva',
    data(){
        return {
            tarea: '',
            active:0,
        }
    },
    methods: {
        agregarTarea(){
            console.log(this.tarea)
            if(this.tarea.length > 0){
                this.$emit('nuevaTarea',this.tarea);
                this.tarea = '';
            } else {
                alert('El contenido de la tarea no puede estar vacío');
            }
        }
    }
}
</script>

<style scoped>

</style>