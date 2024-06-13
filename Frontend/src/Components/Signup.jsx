import { useEffect, useState } from "react";
import { BottomWarning } from "./SmallComponents/BottomWarning";
import { Button } from "./SmallComponents/Button";
import { Heading } from "./SmallComponents/Heading";
import { InputBox } from "./SmallComponents/InputBox";
import { SubHeading } from "./SmallComponents/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { LINK } from "../App";

export function Signup() {
    const navigate = useNavigate()

    const token = `Bearer ${localStorage.getItem("token")}`

    useEffect(function () {
        axios.get(`${LINK}/me`, { headers: { token: token } })
            .then(response => {
                if (response.status == 200) {
                    navigate("/dashboard")
                }
            })
            .catch(err => {
                navigate("/signup")
            })
    }, [])

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function sendReq() {
        try {
            const response = await axios.post(`${LINK}/users/signup`, { firstname, lastname, username, password }, { headers: { token: token } })
            if (response.status == 200) {
                localStorage.setItem("user", response.data.username); localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
            }
        } catch (err) {
            alert(err.response.data.messge)
        }
    }

    return <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-5 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create your account"} />
                <InputBox onchange={(e) => { setFirstname(e.target.value) }} placeholder={"Sameer"} label={"First Name"} />
                <InputBox onchange={(e) => { setLastname(e.target.value) }} placeholder={"Yadav"} label={"Last Name"} />
                <InputBox onchange={(e) => { setUsername(e.target.value) }} placeholder={"sameer25"} label={"Username"} />
                <InputBox onchange={(e) => { setPassword(e.target.value) }} placeholder={"123456"} label={"Password"} />
                <div className="pt-4">
                    <Button onClick={sendReq} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}