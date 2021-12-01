<template>
    <div class="articleEdit">
        <mavon-editor 
        v-model="value"
        @save="$save"/>
    </div>
</template>

<script>
import {saveRequest} from '../api/eidt'
export default {
    name: 'articleEdit',
    data() { 
        return {
            value:'',
        }
    },
    props:{
        fontSize:{
            type:String,
            default:'28px'
        }
    },
    methods:{
        $save(value,render){
            console.log(value,render)
            saveRequest({
                textHTML:render
            }).then((res)=>{
                console.log(res)
                this.$message.success(res.data.message)
            })
        }
    }
}
</script>
<style lang="scss">
.articleEdit{
    width: 100%;
    height: 100%;
}
</style>