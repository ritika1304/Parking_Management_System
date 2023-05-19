import axios from "axios"
import viewBooking from "../Admin/ViewBooking"

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
   //view
   viewbooking(data){
    return axios.post(BASE_URL+"getallBooking",data)
   }
   viewCity(data){
    return axios.post(BASE_URL+"getallCity",data)
   }
   ViewParking(data){
    return axios.post(BASE_URL+"getallParking",data)
   }
   ViewUser(data){
    return axios.post(BASE_URL+"getallUser",data)
   }
}




export default new apiservices()