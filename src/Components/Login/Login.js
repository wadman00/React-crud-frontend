import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";


const Login = ({ onLoadUser }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {


        const user = JSON.parse(sessionStorage.getItem('user'));

        if (user) {
            navigate('/ProductList')
        }

    }, [])

    const authenticate = () => {

        if (!email || !password) {
            alert("The credentials are wrong");
            return;
        }

        fetch(process.env.REACT_APP_SERVER + '/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(result => {


                switch (result.status) {
                    case "ACCESS_DENIED":
                        alert("The credentials are wrong");
                        break;
                    case "ACCESS_GRANTED":

                        sessionStorage.setItem('user', JSON.stringify(result.user));
                        onLoadUser(result.user);
                        navigate("/ProductList");

                        break;
                    default:
                        alert("ERROR IN THE SERVER");
                        break;
                }
            }).catch(err => console.log(err));



    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="wrapper">

            <div className="form-signin" >
                <h1 className="form-signin-heading">Bienvenidos al Supermercado Hemanos!</h1>
                <h4 >Please login</h4>
                <input type="text" id="email" className="form-control" name="email" onChange={onEmailChange} placeholder="Email" autoFocus="" />
                <br></br>

                <input type="password" id="password" className="form-control" onChange={onPasswordChange} name="password" placeholder="Password" />

                <br></br>
                <button className="btn btn-lg btn-primary btn-block" onClick={() => { authenticate() }}>Login</button>

                <br></br>
                <br></br>

                <button type="button" className="btn btn-link" onClick={() => { navigate("/Register") }}>Register</button>
            </div>
        </div>
    );
};
export default Login;