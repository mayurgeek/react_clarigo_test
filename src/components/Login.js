import { useState,useEffect } from "react";
import axios from "axios";

export function Login () {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    async function user_login(e){
        e.preventDefault()
        ({name,password})
        try{
            let res = await axios.post("https://node-mongo-project.onrender.com/user_login",{name,password,})
            console.log(res.data)
            if(res["data"]["status"]===true){
                setName("");
                setPassword("");
        
                localStorage.setItem('token',res["data"]["token"]);
                alert(res["data"]["response"])        
            }else{
                alert(res["data"]["response"])
            }
            
        }catch(e){
            console.log(e)
            alert(e)
        }
    }
    return(
        <>
      <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body rounded shadow border border-info">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form>
              <div className="form-group mt-3">
                <label for="username">Name</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" required onChange={(e)=>{setName(e.target.value)}} value={name}/>
              </div>
              <div className="form-group mt-3">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              </div>
              <button type="submit" onClick={(e)=>{user_login(e)}}  className="btn btn-primary btn-block mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
     </>
    ) 
 }