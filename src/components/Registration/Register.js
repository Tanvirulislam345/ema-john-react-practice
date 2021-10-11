import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Registration form</h2>
                <form action="">
                    <input type="email" name="" id="" placeholder="Enter your email" /> <br /><br />
                    <input type="password" name="" id="" placeholder="Enter your password" /><br /><br />
                    <input type="password" name="" id="" placeholder="Re-Enter your password" /><br /><br />
                    <input type="submit" value="Sign up" />
                </form>
                <small>are you already registered <Link to='/login'>Log in</Link></small>
                <p>------------Or--------</p>
                <img src="https://img.icons8.com/office/30/000000/google-logo.png" alt="google" />
                <img src="https://img.icons8.com/ultraviolet/32/000000/facebook.png" alt="facebook" style={{ marginLeft: '30px', marginRight: '30px' }} />
                <img src="https://img.icons8.com/fluency/38/000000/github.png" alt="github" />
            </div>
        </div>
    );
};

export default Register;