<template>
    <div class="list-container">
        <item-data v-for="item in dataList" :key="item.id" :data="item" @delete="onDelete" />
        <div class="editor-container">
            <v-text-field v-model="inputValue" :label="inputLabelTitle" variant="outlined" />
            <v-btn @click="onAddClick(item)">Add</v-btn>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useFriendsStore } from '../store/friends'
import { useGiftsStore } from '../store/gifts'
import ItemData from '../components/ItemData.vue'
export default {
    name: 'ListView',
    components: {
        ItemData,
    },

    data() {
        return {
            inputValue: null,
        }
    },

    props: {
        dataList: {
            type: Array,
            default: () => [],
        },
    },

    computed: {
        getFriendsPath() {
            return this.$route.path === '/friends'
        },
        inputLabelTitle() {
            return this.getFriendsPath ? 'Friends' : 'Gifts'
        },
    },
    methods: {
        ...mapActions(useFriendsStore, ['deleteFriend', 'addFriend']),
        ...mapActions(useGiftsStore, ['deleteGifts', 'addGift']),

        onDelete(dataId) {
            this.getFriendsPath ? this.deleteFriend(dataId) : this.deleteGifts(dataId)
        },
        onAddClick() {
            this.getFriendsPath ? this.addFriend(this.inputValue) : this.addGift(this.inputValue)
        },
    },
}
</script>
<style lang="scss" scoped>
.list-container {
    max-width: 1000px;
    padding: 0px 50px;

    & .editor-container {
        margin-top: 20px;
    }
}
</style>
