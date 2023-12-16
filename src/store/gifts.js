import { defineStore } from 'pinia'
import { deleteItem, addData } from './helpers.js'
import { useAsignmentsStore } from './asignments'

export const useGiftsStore = defineStore('gifts', {
    state: () => ({
        giftsList: [
            { id: 1, title: 'Cake' },
            { id: 2, title: 'Flowers' },
            { id: 3, title: 'Book' },
            { id: 4, title: 'Chocolate' },
        ],
    }),
    getters: {},

    actions: {
        deleteGifts(id) {
            this.giftsList = deleteItem(this.giftsList, id)
            const asignments = useAsignmentsStore()
            asignments.removeFromListByGift(id)
        },
        addGift(val) {
            addData(this.giftsList, { id: Date.now(), title: val })
        },
    },
})
