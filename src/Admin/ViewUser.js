import { useEffect,useState } from "react";
import apiServices from "../General/apiServices";
export default function ViewUser(){
    const[myData4,setMyData4] = useState()
    useEffect(
        ()=>{
            let data = {}
            apiServices.ViewUser(data).then(
                (response) =>{

                    console.log('response is:', response.data.data)
                    setMyData4(response.data.data)
                }
            ).catch(
                (error)=>{
                    console.log('error is ',error)
                }
            )
        },[])
    return(
        <>
        
            <div className="container table-responsive">
            <h1>View User</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>contact</th>
                    <th>address</th>
                     
                </tr>
                </thead>
           
            {myData4?.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el?.name}</td>
                    <td>{el?.email}</td>
                    <td>{el?.password}</td>
                    <td>{el?.contact}</td>
                    <td>{el?.address}</td>
                    
                    
                </tr>
            ))}
         </table>
         {/* <div className="row">
            <div className="col-md-12">
                 <button type="save" className="btn btn-primary">Save</button>
            </div>
        </div> */}
          
          </div>
        </>
    )
}