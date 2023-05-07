export default function viewCity(){
    const Manage=[
        {
            user_name:"car ",
            email:" 12.30",
            address:"1200",
           
        },
        {
            user_name:"car ",
            email:" 12.30",
            address:"1200",
        },
        {
            user_name:"car ",
            email:" 12.30",
            address:"1200",
        },
     
    ]
    return(
        <>
        
            <div className="container table-responsive">
            <h1>view City</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>user_Details</th>
                    <th>time</th>
                    <th>cost</th>
                    <th>update_Status</th>
                     
                </tr>
                </thead>
           
            {Manage.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.user_Details}</td>
                    <td>{el.time}</td>
                    <td>{el.cost}</td>
                    <td>{el.update_Status}</td>
                    
                    
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