import { useEffect, useState } from "react"
import axios from "axios"
import { LINK } from "../../App"

export function Balance() {
    const [balance,setBalance] = useState("")

    const token = `Bearer ${localStorage.getItem("token")}`
    const user = localStorage.getItem("user")
    
    useEffect(() => {
        async function fn () {
            const response = await axios.get(`${LINK}/balance?username=${user}`,{ headers: { token: token } })
            setBalance(response.data.balance)
        }
        fn()
    },[])


    return <div className="flex">
        <div className="font-bold text-lg px-2">
            Your Balance :
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs. {balance}
        </div>
    </div>
}