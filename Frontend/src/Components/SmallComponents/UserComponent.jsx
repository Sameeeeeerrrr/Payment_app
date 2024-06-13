import { useEffect, useState } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { LINK } from "../../App"

export function UserComponent() {
    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState([])

    const loggedinUser = localStorage.getItem("user")

    const token = `Bearer ${localStorage.getItem("token")}`

    useEffect(() => {
        axios.get(`${LINK}/bulk?user=${loggedinUser}&filter=${filter}`,{headers:{token:token}})
            .then(response => {
                setUsers(response.data.FilteredUsers)
            })
    }, [filter])



    return <div>
        <div className="font-bold mt-6 text-lg px-2">
            Users
        </div>
        <div className="my-2 px-2">
            <input onChange={(e) => { setFilter(e.target.value) }} type="text" placeholder="Search users..." className="w-full px-1 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user}/>)}
        </div>
    </div>
}

function User({ user }) {

    const navigate = useNavigate()
    const nameIcon = user.Name
    
    return <div className="flex justify-between">
        <div className="flex px-2">
            <div className="rounded-full h-12 w-12 bg-slate-950 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-slate-50">
                    {nameIcon.split(" ").join("")[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.Name}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full px-2">
            <Button label={"Send Money"} onClick={() => { navigate(`/transfer?user=${localStorage.getItem("user")}&to=${user.User}`);}} />
        </div>
    </div>
}