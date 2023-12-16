<template>
    <div class="item-container">
        <div>{{ data.title }}</div>
        <div class="icon-container">
<font-awesome-icon :icon="['far', 'trash-can']" @click="onTrashIconClick" />
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'ItemData',

    props: {
        data: {
            type: Object,
            requred: true,
        },
    },

    methods: {
        onTrashIconClick() {
            this.$emit('delete', this.data.id)
        },
    },
}
</script>
<style lang="scss" scoped>
    .item-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;

        & .icon-container{
            cursor: pointer;
        }
    }
</style>
