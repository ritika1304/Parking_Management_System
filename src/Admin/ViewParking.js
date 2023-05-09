//import { Link } from "react-router-dom"
export default function ViewParking(){
    const ViewParking=[
        {
            name:'Ritika',
            city:'jalandhar',
            longitude:'',
            latitude:'',
            phone:'6280338944',
            parking_owner:'Ritika',
            address:'Surya Enclave',
            password:1234,
            email:'ritikay0413@gmail.com',
        },
        {
            name:'Ritika',
            city:'jalandhar',
            longitude:'',
            latitude:'',
            phone:'6280338944',
            parking_owner:'Ritika',
            address:'Surya Enclave',
            password:1234,
            email:'ritikay0413@gmail.com',
        },
        {
            name:'Ritika',
            city:'jalandhar',
            longitude:'',
            latitude:'',
            phone:'6280338944',
            parking_owner:'Ritika',
            address:'Surya Enclave',
            password:1234,
            email:'ritikay0413@gmail.com',
        },
     
    ]
    return(
        <>
        
            <div className="container table-responsive">
            <h1>View Parking</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>name</th>
                    <th>city</th>
                    <th>longitude</th>
                    <th>latitude</th>
                    <th>phone</th>
                    <th>parking_owner</th>
                    <th>address</th>
                    <th>password</th>
                    <th>email</th>

                    
                </tr>
                </thead>
           
            {ViewParking.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.name}</td>
                    <td>{el.city}</td>
                    <td>{el.longitude}</td>
                    <td>{el.latitude}</td>
                    <td>{el.phone}</td>
                    <td>{el.parking_owner}</td>
                    <td>{el.address}</td>
                    <td>{el.password}</td>
                    <td>{el.email}</td>
                    
                    
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