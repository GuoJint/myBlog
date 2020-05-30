<template>
    <div class="home">
        <nav-header></nav-header>
        <nav-mark></nav-mark>
        <div class="home-container">
            <nav-right></nav-right>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavHeader from '../components/NavHeader.vue'
import NavMark from '../components/NavMark.vue'
import NavRight from '../components/NavRight.vue'
export default {
    name: 'home',
    data() { 
        return {

        }
    },
    mounted(){
    },
    methods:{
    },
    components:{
        NavHeader,
        NavMark,
        NavRight
    }
}
</script>
<style lang="scss">
.home{
    position: relative;

}
</style>