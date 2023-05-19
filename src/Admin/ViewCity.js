import { useEffect,useState } from "react";
import apiServices from "../General/apiServices";

export default function ViewCity(){
    const[myData3,setMyData3] = useState()
    useEffect(
        ()=>{
            let data = {}
            apiServices.viewCity(data).then(
                (response) =>{

                    console.log('response is:', response.data.data)
                    setMyData3(response.data.data)
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
            <h1>View City</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>city_name</th>
                    <th>Image</th>
                    <th>Action</th>

                    
                     
                </tr>
                </thead>
           
            {myData3?.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el?.city_name}</td>
                    <td>{el?.Image}</td>
                    <td><Link to ={"viewCity/"+`${el?._id}`}><button className='btn btn-sucess'>Edit</button></Link></td>
                    
                </tr>
            ))}
         </table>
         <div className="row">
            <div className="col-md-12">
                 <button type="save" className="btn btn-primary">Save</button>
            </div>
        </div>
          
          </div>
        </>
    )
}