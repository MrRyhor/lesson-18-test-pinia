<template>
    <div class="selection-container">
        <h2>Selection panel:</h2>
        <div class="friends-selection">
            Friends list:
            <v-select
                v-model="selectionObj.friend"
                :items="friendsList"
                item-title="title"
                item-value="id"
                label="Friend"
            />
        </div>
        <div class="gifts-selection">
            Gifts list:
            <v-select v-model="selectionObj.gift" :items="giftsList" item-title="title" item-value="id" label="Gift" />
        </div>
        <v-btn density="default" variant="outlined" @click="onAddClick">Add to asignments</v-btn>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useFriendsStore } from '../../store/friends'
import { useGiftsStore } from '../../store/gifts'
import { useAsignmentsStore } from '../../store/asignments'

export default {
    name: 'AsignmentsSelect',

    data() {
        return {
            selectionObj: {},
        }
    },

    computed: {
        ...mapState(useFriendsStore, ['friendsList']),
        ...mapState(useGiftsStore, ['giftsList']),
    },

    methods: {
        ...mapActions(useAsignmentsStore, ['addToAsignmentsList']),
        onAddClick() {
            this.addToAsignmentsList(this.selectionObj)
            this.selectionObj = {}
            
        },
    },
}
</script>
<style lang="scss" scoped>
    .selection-container{
        margin-top: 20px;
    }
</style>
