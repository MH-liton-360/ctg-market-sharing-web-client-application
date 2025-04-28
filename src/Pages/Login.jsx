import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {


    const { userLogin, setUser } = useContext(AuthContext);

    const [error, setError] = useState({});
    const location = useLocation();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //console.log({ email, password });

        userLogin(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                Navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-b-xl p-10">

                <h1 className="text-2xl font-semibold text-center">Login Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="text" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />

                            {
                                error.login && (
                                    <label className="label text-sm text-red-600">
                                        {error.login}
                                    </label>
                                )
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="text-center font-bold">Don't Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link> </p>
                </div>

            </div>
        </div>
    );
};

export default Login;