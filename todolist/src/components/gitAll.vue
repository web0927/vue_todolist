<template>
    <div>
        <Header />
        <Section />
        <Footer />
    </div>
</template>

<script>
import Header  from './todolist/header.vue';
import Section from './todolist/section.vue';
import Footer from './todolist/footer.vue';

export default {
    components:{
        Header,
        Section,
        Footer
    }
}
</script>

<style scoped>

</style>
