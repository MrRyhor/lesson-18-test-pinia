<template>    
    <div v-if="getAsignmentsList.length">
        <div v-for="asignment in getAsignmentsList" :key="asignment.id" class="asignment-container">
            <div>
                <h3>{{ asignment.friend }}</h3>
            </div>
            <div>--</div>
            <div>
                <h3>{{ asignment.gift }}</h3>
            </div>
            <v-btn density="default" variant="outlined" @click="removeFromAsignmentsList(asignment.id)">Delete</v-btn>
        </div>
    </div>
    <div v-else class="no-results"><h1>No Results</h1></div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useAsignmentsStore } from '../../store/asignments'
export default {
    name: 'AsignmentsList',

    computed: {
        ...mapState(useAsignmentsStore, ['getAsignmentsList']),
    },
    methods: {
        ...mapActions(useAsignmentsStore, ['removeFromAsignmentsList'])
    },
}
</script>
<style lang="scss" scoped>
    .asignment-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;
   text-transform: uppercase;
}
.no-results {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding-left: 100px;
    font-weight: 700;
}
</style>
