import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [userLogin, setUserLogin] = useState({email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigate();

    const updateStateByInput = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        });
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/login";
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userLogin)
        }

        const response = await fetch(URL, config);
        const data = await response.json();

        if(!response.ok){
            setErrorMessage(data.message);
        }
        else{
            localStorage.setItem('user_token', data.token);
            setErrorMessage('');
            navigation('/dashboard');
        }
    }

    return(
        <>
            <h2> Login </h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email"
                           type="email"
                           name="email"
                           value={userLogin.email}
                           onChange={updateStateByInput} />
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input id="password"
                           type="password"
                           name="password"
                           value={userLogin.password}
                           onChange={updateStateByInput} />
                </div>
                <div>{errorMessage}</div>
                <button>
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;