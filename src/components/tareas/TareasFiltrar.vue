<template #header>
    <div class="center content-inputs">
        <vs-input v-model="filtro" size="large" style="width:100%;" class="filter" placeholder="Filtrar:" />
    </div>
</template>

<script>
export default {
    name:'TareasFiltrar',
    props: {
        value: String,
    },
    computed: {
        filtro: {
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        }
    }
}
</script>

<style scoped>
#filter {
    max-width: 600px
}
/* 
.center {
    opacity: 0.9;
    border-radius:10px;
    background-color: #E9EDF3;
} */
</style>