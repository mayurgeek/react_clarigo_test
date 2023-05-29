import axios from "axios"
import { useState,useEffect } from "react"

export  function Dashboard () {
   let [getdata,setGetdata] = useState({name:"",refer_id:"",total_amount:""})
 function fetch_data(){
    let user_token = localStorage.getItem("token");
    
let url = "https://node-mongo-project.onrender.com/user_dashbord"
    axios.get(
        url,
        {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "user_token": `${user_token}`
                }   
            }
      )
      .then((response) => {
          var response = response.data;
        //   console.log(response)
          if(response["status"]==true){
            setGetdata({name:response["name"],refer_id:response["refer_id"],total_amount:response["response"]})
          }else{
            alert("Login First")
          }
          
        },
        (error) => {
          var status = error.response.status
        //   console.log(error.response)
          alert("do login before")

        }
      );
}

useEffect(()=>{fetch_data()},[])

   return(
    <div className="container rounded shadow border border-info mt-5"> 
<h3 className="my-2">{getdata["name"]} Dashboard</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Refer Id</th>
      <th scope="col">Total Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{getdata["name"]}</td>
      <td>{getdata["refer_id"]}</td>
      <td>{getdata["total_amount"]}</td>
    </tr>
  </tbody>
</table>
    </div>
   ) 
}