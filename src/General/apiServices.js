import axios from "axios"

const BASE_URL="http://localhost:3000/admin/"
const token=sessionStorage.getItem("token")
console.log(token)

const header1={
    Accept:'application/json',
    Authorization:token
}
class apiservices{
   login(data){
    console.log(data)
    return axios.post(BASE_URL+"login",data)
   }
}

export default new apiservices()