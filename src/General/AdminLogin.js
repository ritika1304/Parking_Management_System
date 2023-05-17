
import { useState,  } from "react"
import { ToastContainer, toast } from "react-toastify"
import apiServices from "../General/apiServices"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
// import AdminMaster from "../../Master/AdminMaster";

export default function Login() {
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()
    const handleForm=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data={
             email:email,
             password:pass,
        }
        apiServices.login(data).then(
            (x)=>{
                // setTimeout(
                //     ()=>{
                //         setLoading(false)
                //     },1500
                // )
                if(x.data.success){
                    // console.log(x)
                    toast.success(x.data.msg)
                    sessionStorage.setItem("token",x.data.token)
                    setTimeout(
                        ()=>{
                        navigate("/admin")
                        },2000
                    )
                }
                else{
                    toast.error(x.data.msg)
                }
            }
        ).catch(
            (error)=>{
                setTimeout(
                    ()=>{
                        setLoading(false)
                    },1500
                )
                console.log(error)
                toast.error("Something went wrong!! try again later")
            }
        )
    }
    const changeEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const cssobj={
        position:"absolute",
        top:"20%",
        left:"45%",
    }
  return(
    <>
    <div className="container">
    <ClipLoader loading={loading} cssOverride={cssobj}/>
            <div className="row my-5">
                <div className="col-md-12">
                    <h1 className="mt-5"> Admin Login</h1>
                    <form onSubmit={handleForm}>
                      <label >E-mail</label>
                      <input className="form-control" value={email} onChange={changeEmail}/>
                      <label >Password</label>
                      <input className="form-control" value={pass} onChange={
                                                        (e) => { setPass(e.target.value) }
                                                    }/>
                      <br/>
                      
                      <div className="row">
                        <div className="col-md-12">
                         <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                      
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}