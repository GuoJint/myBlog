<template>
    <div class="NavMark">
        <div class="container">
            <div class="weather">
                <p>{{this.weatherList.city}}</p>
                <p>{{this.weatherList.weather}}</p>
                <p>{{this.weatherList.wdforce}}{{this.weatherList.wd}}</p>
            </div>
            <div class="user">
                <p>{{this.weatherList.today}}</p>
                <p>{{userName?userName:'郭晋廷'}}</p>
                <p>退出</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'NavMark',
    data() {    
        return {
            city:'101100408',
            weatherList:[]
        }
    },
    mounted(){
        this.getWeather()
    },
    methods:{
        getWeather(){
            axios.get(`http://api.help.bj.cn/apis/weather`,{
                params:{
                    id:this.city
                }
            })
            .then((response) => {
                this.weatherList = response.data
                console.log(this.weatherList)
            })
            .catch((error) =>{
                console.log(error);
            });
        }
    }
}
</script>
<style lang="scss">
.NavMark{
    padding-top:60px; 
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        width: 60%;
        display: flex;
        justify-content: space-between;
        p{
            cursor: pointer;
            display: inline;
            margin-right: 20px;
            background-image: linear-gradient(160deg,#2e317c 30%,#5cb3cc,#93b5cf);
            background-size: 300%;
            -webkit-background-clip: text;
            background-clip:text;
            color: transparent;
            animation: textAMT 15s infinite;
        }
    }
    
}
@keyframes textAMT {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
</style>