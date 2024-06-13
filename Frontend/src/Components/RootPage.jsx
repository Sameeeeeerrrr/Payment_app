import axios from "axios"
import { useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { LINK } from "../App"

export function Root() {
    const navigate = useNavigate()

    const token = `Bearer ${localStorage.getItem("token")}`

    useEffect(function () {

        axios.get(`${LINK}/me`, { headers: { token: token } })
            .then(response => {
                
                if (response.status == 200) {
                    navigate("/dashboard")
                } else {
                    navigate("/signin")
                }
            }).catch(err => {
                navigate("/signin")
            })
    },[])

    return <div className="flex justify-center items-center bg-slate-200 h-screen py-80">
        Loading...
    </div>
}