<template>
    <section>
            <h2>正在进行 <span id="todocount">{{$store.state.todolist.upTodolist.length}}</span></h2>
            <p></p>
            <ol id="todolist" class="demo-box">
                <Slidelist v-for="(item, index) in $store.state.todolist.upTodolist" :key='index' :i='index' :text='item.text' :watch='false'/>
            </ol>
            <h2>已经完成 <span id="donecount">{{$store.state.todolist.donTodolist.length}}</span></h2>
            <ul id="donelist">
                <Slidelist v-for="(item, index) in $store.state.todolist.donTodolist" :key='index' :i='index' :text='item.text' :watch='true'/>
            </ul>
        </section>
</template>

<script>
import Slidelist from './slidelist.vue';
export default {
    data(){
         return {
             data:[],
             upNum:0,
             downNum:0
         }
     },
     mounted(){
         
     },
     methods:{
         
     },
     components:{
         Slidelist
     }
}
</script>
<style scoped>

</style>


