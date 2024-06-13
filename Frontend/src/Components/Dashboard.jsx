import { useEffect } from "react";
import { Appbar } from "./SmallComponents/Appbar";
import { Balance } from "./SmallComponents/Balance";
import { UserComponent } from "./SmallComponents/UserComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LINK } from "../App";


export function Dashboard(){

    const navigate = useNavigate()

    const token = `Bearer ${localStorage.getItem("token")}`

    useEffect(function(){
        axios.get(`${LINK}/me`, { headers: { token: token } })
            .then(response =>{
                if(response.status !== 200){
                    navigate("/signin")
                }
            })
            .catch(err =>{
                navigate("/signin")
            })
    },[])
    
    return <div>
        <Appbar/>
        <br></br>
        <Balance/>
        <UserComponent/>
    </div>
}