import { useState } from "react"
import axios from 'axios'
export default function MyData(){
    const[product ,setProduct]=useState([{}])
    const hit=()=>{
        const BASE_URL="https://student.gulati.ksesystem.com/public/api/"
        axios.get(BASE_URL+"getProduct")
        .then(
            (x)=>{
                setProduct(x.data.response.data)
                console.log('product is ', product)
            }
        )
        .catch(
            (error)=>{
                    console.log('error is',error)
            }
            
        )
        
    }
    return(
        <>
        <h1> This is My Data page</h1>
        <div>
            <button className="btn btn-primary" onClick={hit}>click</button>
            <table className=" table table-bordered">
                <tr>
                    <th>Sr.no </th>
                    <th>Brand name</th>
                    <th>Product name </th>
                    <th>price </th>
                </tr>
                {product?.map((element,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element?.brand_name}</td>
                        <td>{element?.product_name}</td>
                        <td>{element?.price}</td>
                        
                    </tr>
                ))}
            </table>
        </div>
        </>
    )
}