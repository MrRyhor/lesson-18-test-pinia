<template>
    <nav>
        <router-link to="/">Main</router-link> | <router-link to="/friends">Friends</router-link> |
        <router-link to="/gifts">Gifts</router-link> |
        <router-link to="/asignments">Asignments</router-link>
    </nav>
    <slot>
        <h1>{{ listTitle }}</h1>
        <list-view :data-list="getDataList" />
    </slot>
</template>
<script>
import { mapState } from 'pinia'
import { useFriendsStore } from '../store/friends'
import { useGiftsStore } from '../store/gifts'
import ListView from '../components/ListView.vue'
export default {
    name: 'MainMasterPage',
    components: {
        ListView,
    },

    computed: {
        ...mapState(useFriendsStore, ['friendsList']),
        ...mapState(useGiftsStore, ['giftsList']),
        getFriendsPath() {
            return this.$route.path === '/friends'
        },       
        listTitle() {
            return this.getFriendsPath ? 'Friends list' : 'Gifts list'            
        },
        getDataList() {
            return this.getFriendsPath ? this.friendsList : this.giftsList
        },
    },
}
</script>
<style lang="scss" scoped>
    h1 {
        padding: 0px 50px;
    }
</style>
