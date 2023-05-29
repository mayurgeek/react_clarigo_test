import { useState,useEffect } from "react";
import axios from "axios";

export function UserRegister () {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [parent_id, setParent_id] = useState("")

   async function user_fun(event){
        event.preventDefault()
        console.log({name,password,parent_id})
        try{
            let res = await axios.post("https://node-mongo-project.onrender.com/user_resgister",{name,password,parent_id})
            console.log(res.data)
            if(res["data"]["status"]===true){
                setName("");
                setPassword("");
                setParent_id("")
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
            <h2 className="card-title text-center mb-4">User Registration</h2>
            <form>
              <div className="form-group mt-2">
                <label for="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e)=>{setName(e.target.value)}} required value={name}/>
              </div>
              <div className="form-group mt-2">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} required value={password}/>
              </div>
              <div className="form-group mt-2">
                <label for="parentId">parent ID</label>
                <input type="number" className="form-control" id="parentId" placeholder="Enter parent ID" onChange={(e)=>{setParent_id(e.target.value)}} value={parent_id}/>
              </div>
              <button type="submit" onClick={(e)=>{user_fun(e)}} className="btn btn-primary btn-block mt-3">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
     </>
    ) 
 }