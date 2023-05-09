export default function viewCity(){
    const Manage=[
        {
            city_name: 'Jalandhar',
            Image:'img'
           
        },
        {
            city_name: 'Hoshiarpur',
            Image:'img'
        },
        {
            city_name: 'pathankot',
            Image:'img'
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
                    <th>city_name</th>
                    <th>Image</th>
                    
                     
                </tr>
                </thead>
           
            {Manage.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.city_name}</td>
                    <td>{el.Image}</td>
                    
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