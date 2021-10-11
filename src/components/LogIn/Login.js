import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    // console.log('came from', location.state?.form);
    // console.log('came from', location);
    const redirect_uri = location.state?.form || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                // console.log(result.user);
                history.push(redirect_uri);
            }).catch(error => {
                console.log(error.message);
            });
    }
    return (
        <div className="login-form">
            <div>
                <h2>LogIn form</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="Enter your email" /> <br /><br />
                    <input type="password" name="" id="" placeholder="Enter your password" /><br /><br />
                    <input type="submit" value="Log in" />
                </form>
                <small>are you registered <Link to='/register'>sign Up</Link></small>
                <p>------------Or--------</p>
                <img src="https://img.icons8.com/office/30/000000/google-logo.png"
                    alt="google"
                    onClick={handleGoogleLogIn}
                    className="social-icon"
                />
                <img src="https://img.icons8.com/ultraviolet/32/000000/facebook.png" alt="facebook" style={{ marginLeft: '30px', marginRight: '30px' }} />
                <img src="https://img.icons8.com/fluency/38/000000/github.png" alt="github" />
            </div>

        </div>
    );
};

export default Login;