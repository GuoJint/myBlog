import axios from 'axios'
import {baseURL} from './baseURL'

class HttpRequest{
    getInsideConfig(){
        const config={
            baseURL,
            timeout:1000
        }
        return config
    }
    request(options){
        const instance = axios.create()
    }
    interceptors(instance,url){
        
    }
}