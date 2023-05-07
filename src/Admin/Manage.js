//import { Link } from "react-router-dom"
export default function Manage(){
    const Manage=[
        {
            slots:" 01",
            vehicle:"car ",
            price:" 12000",
            time:" 12.30",
            Image:" "
        },
        {
            slots:" 2",
            vehicle:"bike ",
            price:" 1000",
            time:" 1.00",
            Image:" "
        },
        {
            slots:" 3",
            vehicle:" verna",
            price:" 5000",
            time:" 3.00",
            Image:" "
        },
     
    ]
    return(
        <>
        
            <div className="container table-responsive">
            <h1>Manage</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>Slot</th>
                    <th>Vehicle</th>
                    <th>Price</th>
                    <th>Time</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>

                    
                </tr>
                </thead>
           
            {Manage.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.slots}</td>
                    <td>{el.vehicle}</td>
                    <td>{el.price}</td>
                    <td>{el.time}</td>
                    <td><img src=""/></td>
                    
                </tr>
            ))}
         </table>
         <br/>
         
         <div className="row">
            <div className="col-md-12">
                 <button type="save" className="btn btn-primary">Save</button>
            </div>
        </div>
        
          
        </div>
        </>
    )
}