<template>
    <main-master-page>
        <div class="main-container">
            <h1>Welcome to the Santa Claus residence!</h1>
            <h3>Here you can choose gifts for yourself and your friends</h3>
        </div>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
export default {
    name: 'MainView',

    components: {
        MainMasterPage,
    },
}
</script>
<style lang="scss" scoped>
    .main-container{
        padding: 0px 50px;
    }
</style>
