import Button from "./components/Button"
import { useContext } from "react"
import { Context } from "./App"

const Login = (props)=>{
    const [loggedIn, setLoggedIn] = useContext(Context).loggedIn
    return(
        <div className='flex items-center justify-center w-screen h-screen'>
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col items-center bg-white/50 p-5 rounded-lg space-x-8 text-shadow-lg">
                <label>
                    <span>Username:</span>
                    <input type='text' className="m-5 outline-2 rounded-sm"></input>
                </label><br/>
                <label>
                    <span>Password:</span> 
                    <input type='password' className="m-5 outline-2 rounded-sm"></input>
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