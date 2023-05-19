import  { useEffect, useState} from 'react';
import apiServices from "../General/apiServices";
import { Link } from 'react-router-dom';
export default function ViewBooking(){
    
    const [myData,setMyData] = useState()
    useEffect(
        ()=>{
            let data = {}
            apiServices.viewbooking(data).then(
                (response) =>{

                    console.log('response is:', response.data.data)
                    setMyData(response.data.data)
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
            <h1>View Booking</h1>
            <br/>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>price</th>
                    <th>Date</th>
                    <th>time</th>
                    <th>total_cost</th>
                    <th>payment_way</th>
                    <th>CVV</th>
                    <th>card_no</th>
                    <th>Action</th>
                     
                </tr>
                </thead>
           
            {myData?.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el?.price}</td>
                    <td>{el?.date}</td>
                    <td>{el?.time}</td>
                    <td>{el?.total_cost}</td>
                    <td>{el?.payment_way}</td>
                    <td>{el?.CVV}</td>
                    <td>{el?.card_no}</td>
                    <td><Link to ={"viewBooking/"+`${el?._id}`}><button className='btn btn-sucess'>Edit</button></Link></td>
                    
                    
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