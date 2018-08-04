<template>
    <header>
        <section>
            <label for="title">ToDoList</label>
            <input type="text" id="title" name="title" v-model="lineData" @keyup.enter='btn_addClick' placeholder="添加ToDo" autocomplete="off" />
        </section>
    </header>
</template>

<script>
export default {
    data(){
         return {
             lineData:''
         }
     },
     mounted(){

     },
     methods:{
         btn_addClick(){
           if (this.lineData){
                this.$store.commit('todolist/addTodo', {pu:{text:this.lineData}});
                this.lineData = '';
           }
         },
     }
}
</script>
<style scoped>
section{
    position: relative;
}
.btn{
    position: absolute;
    top:14px;
    right:-34px;
}
</style>


