<template #header>
    <div class="center content-inputs">
        <vs-input v-model="filtro" placeholder="Filtrar:" />
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
</style>