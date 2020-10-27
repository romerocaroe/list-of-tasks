<template>
    <div class="center exampled">
        <vs-navbar text-white :color="active" center-collapsed v-model="active">
            <template #left>
                <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
            </template>
            <template #right>
                <vs-navbar-item :active="active == 'primary'" id="primary">
                    Primary
                </vs-navbar-item>
            </template>
        </vs-navbar>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            active: 'primary',
        }
    }
}
</script>

<style scoped>

</style>