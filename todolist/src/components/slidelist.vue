<template>
    <li>
        <input type="checkbox" :checked='watch' @click="moveList($event,i, watch)"/>
        <p>
            <b v-if="isA" @click='showInput'>{{text}}</b>
            <input type="text" v-if="!isA" @keydown.enter='keyInput(i, text, watch)' v-model="text"/>
        </p>
        <a @click="clickRemove(i, watch)">-</a>
    </li>
</template>

<script>
export default {
    data(){
        return {
            data:this.text,
            isA:true
        }
    },
    props:['i','text','watch'],
    methods:{
        clickRemove(index, watch){
            this.$store.commit('todolist/removeTodo', {index:index, watch:watch});
         },
        showInput(){
            this.isA = false
        },
        keyInput(index,text, watch){
            this.$store.commit('todolist/changeTodo', {index:index, vtext:text, watch:watch});
            this.isA = true;
        },
        moveList(e, index, watch){
            this.$store.commit('todolist/moveTodo', {isCheck:e.target.checked, index: index}); 
        }
    }
}
</script>

<style scoped>
b{
    display: block;
}
</style>
