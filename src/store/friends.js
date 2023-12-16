import { defineStore } from 'pinia'
import { deleteItem, addData } from './helpers.js'
import { useAsignmentsStore } from './asignments'

export const useFriendsStore = defineStore('friends', {
    state: () => ({
        friendsList: [
            { id: 1, title: 'John' },
            { id: 2, title: 'Jenny' },
            { id: 3, title: 'Den' },
            { id: 4, title: 'Betty' },
        ],
    }),
    getters: {
       
    },

    actions: {
        deleteFriend(id) {
            this.friendsList = deleteItem(this.friendsList, id)
            const asignments = useAsignmentsStore()
            asignments.removeFromListByFriend(id)
            console.log(asignments.asignmentsList)
        },
        addFriend(val) {
            addData(this.friendsList,{ id: Date.now(), title: val })
        },
    },
})
