<template>
    <main-master-page>
        <div class="asignments-container">
<h1>Asignments list:</h1>
        <asignments-list />
        <asignments-select />
        </div>
        
    </main-master-page>
</template>
<script>
import MainMasterPage from '../../masterpages/MainMasterPage.vue'
import AsignmentsList from './AsignmentsList.vue'
import AsignmentsSelect from './AsignmentsSelect.vue'
export default {
    name: 'AsignmentsView',

    components: {
        MainMasterPage,
        AsignmentsList,
        AsignmentsSelect,
    },
}
</script>
<style lang="scss" scoped>
    .asignments-container{
        max-width: 1000px;
        padding: 0px 50px;
    }
</style>
