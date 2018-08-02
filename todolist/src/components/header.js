import Vue  from 'vue';
export default {
    render() {
        return <header>
            <section>
                <form id="form">
                    <label for="title">ToDoList</label>
                    <input type="text" id="title" name="title" placeholder="添加ToDo" autocomplete="off" />
                </form>
            </section>
        </header>
    },
    data(){
        return {

        }
    }
}