import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "must be more then five characters long" });
            return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        //console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl rounded-b-xl p-10">

                <h1 className="text-2xl font-semibold text-center">Register Your Account</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" />

                            {
                                error.name && (
                                    <label className="label text-sm text-red-500">
                                        {error.name}
                                    </label>
                                )
                            }

                            <label className="fieldset-label">Photo URL</label>
                            <input name="photo" type="text" className="input" placeholder="Photo URL" />

                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />

                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>

                    </form>


                    <p className="text-center font-bold">Already Have An Account ?{""} <Link to="/auth/login" className="text-red-500">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;