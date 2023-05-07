import { Outlet } from "react-router-dom";
import AHeader from "./AHeader";
import AFooter from "./AFooter";


export default function AMaster(){
    return(
        <>
        <AHeader/>
        <Outlet/>
        <AFooter/>
        </>
    )
}