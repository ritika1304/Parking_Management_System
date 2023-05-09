export default function viewCity(){
    const Manage=[
        {
            Slots:'first',
            price_day:500,
            vehicle:'2 weller',
            price_hour:20
           
        },
        {
            Slots:'Second',
            price_day:1000,
            vehicle:'4 weller',
            price_hour:40
        },
        {
            Slots:'third',
            price_day:800,
            vehicle:'3 weller',
            price_hour:30
        },
     
    ]
    return(
        <>
        
            <div className="container table-responsive">
            <h1>view Slots</h1>
            <table className="table table-bordered table-hover table-striped">
               
            <thead>
                 <tr>
                    <th>Sr.No</th>
                    <th>Slots</th>
                    <th>price_day</th>
                    <th>vehicle</th>
                    <th>price_hour</th>
                    
                     
                </tr>
                </thead>
           
            {Manage.map((el,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.Slots}</td>
                    <td>{el.price_day}</td>
                    <td>{el.vehicle}</td>
                    <td>{el.price_hour}</td>
                    
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