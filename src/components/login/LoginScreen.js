import React from "react";

export const LoginScreen = ({history} ) => {
    const handledLogin = () => {
        // history.push('/')
        history.replace('/')
        console.log('clock')
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-primary" onClick={handledLogin}>
                Login
            </button>
        </div>
    )
}
