import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function user_login(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://node-mongo-project.onrender.com/user_login",
        { name, password }
      );

      console.log(response.data);
      if (response.data.status === true) {
        setName("");
        setPassword("");

        localStorage.setItem("token", response.data.token);
        alert(response.data.response);
        navigate("/")
      } else {
        alert(response.data.response);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while logging in.");
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body rounded shadow border border-info">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form>
                  <div className="form-group mt-3">
                    <label htmlFor="username">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={user_login}
                    className="btn btn-primary btn-block mt-3"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
