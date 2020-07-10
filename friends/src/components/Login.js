import React, {useState} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
export function Login() {
    const [state, setState] = useState({
        credentials: {
            username: "Lambda School",
            password: "i<3Lambd4",
        }
    });

    const handleChange = (event) => {
       setState({
            credentials: {
                ...state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    function login(event) {
        event.preventDefault();
        axiosWithAuth()
        .post("/login", state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
        })
        .catch(err => {
          console.log("Err is: ", err);
        });
    };

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={state.credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="username"
                    value={state.credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

