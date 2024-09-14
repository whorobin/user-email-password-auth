import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset error 
        setRegisterError('');
        setSuccess('');
        // console.log(name, email, password);
        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user);
                const LoggedInUser = result.user;
                console.log(LoggedInUser);
                setSuccess('User Created Successfully');
            })
            .catch(error => {
                // console.error(error);
                console.log('error', error.message);
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600">
                                {registerError}
                            </p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        <p>Already have an account?  <Link to="/login">Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;