<template>
    <div class="NavMark">
        <el-checkbox-group class="container" v-model="checkList">
            <el-checkbox label="HTML"></el-checkbox>
            <el-checkbox label="CSS"></el-checkbox>
            <el-checkbox label="JavaScript"></el-checkbox>
            <el-checkbox label="Vue" ></el-checkbox>
            <el-checkbox label="React" ></el-checkbox>
            <el-checkbox label="Node"></el-checkbox>
        </el-checkbox-group>
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
    width: 100%;
    height: 50px;
    .container{
        width: 1000px;
        margin: 0 auto;
        line-height: 50px
    }
}
</style>