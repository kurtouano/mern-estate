import { useState } from "react";
import "../shared/AuthForm.css";
import { RxEyeClosed, RxEyeOpen} from "react-icons/rx";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function SignUpComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/api/auth/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
    }

  return (
    <> 
        <main className="sign-in-container">
            
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
                <div className="sign-in-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} required />
                </div>
                <div className="sign-in-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className="sign-in-input">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" onChange={handleChange} required />
                    {showPassword ? <RxEyeOpen className="sign-in-show-pass-btn" onClick={togglePasswordVisibility} /> : <RxEyeClosed className="sign-in-show-pass-btn" onClick={togglePasswordVisibility}/> }
                </div>
                <div className="sign-in-forget-pass-container">
                    <div className="sign-in-remember-me-container">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="" className="sign-in-forgot-pass">Forgot password?</a>
                </div>

                <button type="submit" className="sign-in-submit-btn">Sign up</button>
                <button type="submit" className="sign-in-google-btn"><FcGoogle className="sign-in-google-icon"/>Continue with Google</button>
                <p className="sign-in-have-acc">Have an account? <Link to="/sign-in">Sign in</Link></p>
            </form>

        </main>
    </>
  )
}
