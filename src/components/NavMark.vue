<template>
    <div class="NavMark">
        <img src="../assets/img/ad1.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'NavMark',
    data() {    
        return {
            checkList:[]
        }
    }
}
</script>
<style lang="scss">
.NavMark{
    padding-top:60px; 
    width: 65%;
    height: 50px;
    display: flex;
    // flex-direction: row-reverse;
    justify-content: flex-end;
    img{
        margin: 5px 10px 5px 0;
        width: 66.5%;
        height: 60px;
    }
}
</style>