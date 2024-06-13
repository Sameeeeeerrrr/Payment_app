import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Appbar() {
    const user = localStorage.getItem("user")
    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        navigate("/signin")
    }

    return <div className="shadow h-14 flex justify-between bg-slate-200">
        <div className="flex flex-col justify-center h-full ml-4 font-bold">
            Payment App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 font-bold">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-950 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-slate-50">
                    {(user)?user[0].toUpperCase() : ""}
                </div>
            </div>
        </div>
        <div className="flex px-2 rounded-lg bg-red-500 justify-center mt-2.5 mr-2 h-9 border-solid border-1 border-slate-700"><button onClick={logout}>Logout</button></div>
    </div>
}