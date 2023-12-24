// index.js
//网络请求方法放在这个文件


import path from "./path"
import axios from "../utils/request"
axios.defaults.withCredentials = true;
const api={
    getUserinfo(userid,params){
        return axios.get(path.baseUrl+path.getUserinfo+userid+"/Inform",{ params: params })
    },
    putUser(userid,params){
        return axios.put(path.baseUrl+path.putUser+userid+"/Inform",params)
    },
    getCode(responseType){
        return axios.get(path.baseUrl+path.getCode,{responseType:responseType})
    },
    postLogin(params,headers){
        return axios.post(path.baseUrl+path.logIn, params,{headers:headers})
    },
    postRegister(params){
        return axios.post(path.baseUrl+path.regist,params)
    },
   
    pushRecord(params){
        return axios.post(path.baseUrl+path.pushRecord,params)
    },
    getHois(userid,params){
        return axios.get(path.baseUrl+path.getHois+userid,{ params: params })
    },
    getCourse(params){
        return axios.get(path.baseUrl+path.getCourse,{ params: params })
    },
    pushmessge(id,params){
        return axios.post(path.baseUrl+path.pushmessge+id,params)
    },
    getmessge(id){
        return axios.get(path.baseUrl+path.getmessge+id)
    }
    }
    // delBook(params){
    //     return axios.delete(path.baseUrl+path.delBook, { data: params })
    // },
    // returnBook(params){
    //     return axios.put(path.baseUrl+path.returnBook, params )
    // },
    // build2(params){
    //     return axios.post(path.baseUrl+path.build2, params)
    // },
    // build3Book(){
    //     return axios.get(path.baseUrl+path.build3Book)
    // }, 
  
// }

   


export default api
   
