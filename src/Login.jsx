import Button from "./components/Button"
import { useContext } from "react"
import { Context } from "./App"

const Login = (props)=>{
    const [loggedIn, setLoggedIn] = useContext(Context).loggedIn
    return(
        <div className="flex justify-center items-center">
            <form onSubmit={(e)=>{e.preventDefault()}} className="bg-white/50">
                <label>
                    Username:
                    <input type='text'></input>
                </label><br/>
                <label>
                    Password:
                    <input type='password'></input>
                </label><br/>
                <Button buttonData={{
                    className:'btn btn-login',
                    value:'',
                    handler:()=>{setLoggedIn(true)},
                    text:'Login'
                }}/>
            </form>
        </div>
    )
}

export default Login