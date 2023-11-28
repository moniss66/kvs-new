import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../protectedRoutes/UserContext";



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, setUser } = useContext(UserContext);
   
    const navigate = useNavigate();
    const validation = (e) => {
        
        if(!email || !password)
        {
            alert("enter all fields")
            return;
        }
        
    
       
        e.preventDefault()
       
      }
     
    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            validation(e);
            console.log(body);
            const res = await fetch("https://kvsserver.onrender.com/login", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            console.log(jsonData)
            localStorage.setItem("uid",jsonData._id);
            // alert(jsonData.id)
            const param = jsonData.email
            if (jsonData.email === '') {
              
                navigate("/admin")
            } else {
            navigate("/")
            await setUser(jsonData.email);
            // alert(user);
             }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="flex form justify-center mt-7">
                <div class="w-full max-w-xs">
                    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">
                                USERNAME
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <br />

                        <div class="mb-2">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
                                PASSWORD
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div class="w-full justify-center px-3 mb-6 md:mb-0 ">
                            <button class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-button" type="button" onClick={onLogin}>
                                SignIn
                            </button>

                        </div>
                        <p class="text-center text-gray-500 mt-5 text-l">
                        &copy;If not Registered : <Link to="/register"><span style={{ color: 'red' }}>Register</span></Link>
                    </p>

                    </form>
                   
                </div>
            </div>
        </>
    )
}

export default Login