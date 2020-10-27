<template>
    <div>
        <vs-table striped>
            <template #header>
                <vs-input v-model="search" border placeholder="Search" />
            </template>
            <template #thead>
                <vs-tr>
                    <vs-th sort @click="tareas = $vs.sortData($event ,tareas, tarea)">
                    Tareas:
                    </vs-th>
                    <vs-th>
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr
                    icon="chevron_right"
                    :key="index"
                    v-for="(tarea, index) in $vs.getPage($vs.getSearch(tareas, search), page, max) "
                    :data="tarea"
                >
                    <vs-row w="12">
                        <vs-col w="10" md="10" >
                            <vs-td>
                                <box-icon name='chevrons-right' size='xs'></box-icon> {{ tarea }}
                            </vs-td>
                        </vs-col>
                        <vs-col w="1" md="1" justify="right" align="right" >
                            <vs-button
                                icon
                                color="primary"
                                :active="active == 0"
                                @click="editarTarea(index,tarea),active = 0"
                            >
                                <!-- BUSCAR $EMIT en google -->
                                <box-icon name='edit-alt' size='xs' justify='right'></box-icon>
                            </vs-button>
                        </vs-col>
                        <vs-col w="1" md="1" justify="right" align="right" >
                            <vs-button
                                icon
                                color="danger"
                                align="right"
                                :active="active == 0"
                                @click="$emit('eliminar-tarea',index),active = 0"
                            >
                                <!-- BUSCAR $EMIT en google -->
                                <box-icon name='trash' size='xs' justify='right'></box-icon>
                            </vs-button>

                        </vs-col>
                    </vs-row>
                        <template #expand v-if="editando === index">
                            <div class="con-content">
                                <vs-row w="12" justify="left" align="left">
                                    <vs-col w="4" xs="12">
                                        <vs-input
                                            primary
                                            v-model="texto"
                                            state="primary"
                                            type="text"
                                            placeholder="Editar tarea"
                                            @keyup.enter="emititTareaEditada()"  />
                                    </vs-col>
                                    <vs-col w="2" xs="12">
                                        <vs-button
                                            icon
                                            color="medium"
                                            :active="active == 0"
                                            @click="emititTareaEditada(),active = 0"
                                        >
                                            <!-- BUSCAR $EMIT en google -->
                                            <box-icon name='check' size='xs' justify='right'></box-icon>
                                        </vs-button>
                                    </vs-col>
                                </vs-row>    
                            </div>
                            </template>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(tareas, search), max)" />
            </template>
        </vs-table>
    </div>
</template>

<script>
import 'material-icons/iconfont/material-icons.css';
import 'boxicons';

export default {
    name: 'TareasListaer',
    props: {
        tareas: {}
    },
    methods: {
        editarTarea(index,tarea){
            this.editando = index;
            this.texto = tarea;
        },
        emititTareaEditada(){
            console.log(this.editando,this.texto)
            this.$emit('editar-tarea',this.editando,this.texto);
            this.editando = null;
            this.texto = '';
        }
    },
    data(){
        return {
            editActive:false,
            edit:null,
            editProp:'',
            active: 0,
            page: 1,
            max: 5,
            search:'',
            editando: null,
            selected: [],
            texto:'',
        }
    }
}
</script>

<style scoped>

</style>