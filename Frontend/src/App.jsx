import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Signin } from "./Components/Signin"
import { Signup } from "./Components/Signup"
import { Dashboard } from "./Components/Dashboard"
import { Transfer } from "./Components/Transfer"
import { Root } from "./Components/RootPage"

export const LINK = "https://payment-app-wbpo.onrender.com"

function App() {
  return <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Root/>} path="/"></Route>
        <Route element={<Signin/>} path="/signin"></Route>
        <Route element={<Signup/>} path="/signup"></Route>
        <Route element={<Dashboard/>} path="/dashboard"></Route>
        <Route element={<Transfer/>} path="/transfer"></Route>
      </Routes>
      </BrowserRouter>
    </div>
}

export default App