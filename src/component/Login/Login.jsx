import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [loginError, setLoginError] = useState();
    // setLoginError('');
    const [loginSuccess, setLoginSuccess] = useState();



    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        // reset 
        setLoginError('');
        setLoginSuccess('');



        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setLoginSuccess('login successfully');
            })
            .catch(error => {
                console.log('error', error.message);
                setLoginError(error.message);
            })
    }

    const handleForgetPassword = e => {
        console.log('send email');
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            loginError && <p className="text-red-600 text-center">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-green-600">{loginSuccess}</p>
                        }
                        <p>New here? <Link to="/register">Please Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;