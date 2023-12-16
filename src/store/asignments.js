import { defineStore } from 'pinia'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'
import { getFindById, deleteItem, addData } from './helpers'

export const useAsignmentsStore = defineStore('asignments', {
    state: () => ({
        asignmentsList: [{ id: 1, friend: 2, gift: 1 }],
    }),
    getters: {
        getAsignmentsList: (state) => {
            const friends = useFriendsStore()
            const gifts = useGiftsStore()

            return state.asignmentsList.map((asignment) => ({
                id: asignment.id,
                friend: getFindById(friends.friendsList, asignment.friend).title,
                gift: getFindById(gifts.giftsList, asignment.gift).title,
                // friend: friends.friendsList.find((friend) => friend.id === asignment.friend).title,
                // gift: gifts.giftsList.find((gift) => gift.id === asignment.gift).title,
            }))
        },
    },
    actions: {
        addToAsignmentsList(obj) {
            addData(this.asignmentsList, {
                id: Date.now(),
                ...obj,
            })
        },
        removeFromAsignmentsList(id) {
            this.asignmentsList = deleteItem(this.asignmentsList, id)
        },
        removeFromListByFriend(friendId) {
            this.asignmentsList = this.asignmentsList.filter((asignment) => asignment.friend !== friendId)
        },
        removeFromListByGift(giftId) {
            this.asignmentsList = this.asignmentsList.filter((asignment) => asignment.gift !== giftId)
        },
    },
})
