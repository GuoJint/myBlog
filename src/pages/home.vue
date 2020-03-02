<template>
    <div class="home">
        <nav-header></nav-header>
        <nav-mark></nav-mark>
        <router-view></router-view>
    </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavMark from '../components/NavMark.vue'
export default {
    name: 'home',
    data() { 
        return {

        }
    },
    components:{
        NavHeader,
        NavMark
    }
}
</script>