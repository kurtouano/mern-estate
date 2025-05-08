import { useState } from "react";
import "../shared/AuthForm.css";
import { RxEyeClosed, RxEyeOpen} from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function SignUpComponent() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/auth/sign-up`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success == false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');
        } 
        catch (error) {
            setLoading(false);
            setError(error.message);
            return;
        }
    }

  return (
    <> 
        <main className="sign-in-container">
            
            <h1>Create an account</h1>
            {error && <section className="sign-in-error-container">{error}</section>}
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

                <button disabled={loading} type="submit" className="sign-in-submit-btn">{loading ? "Loading..." : "Sign up"}</button>
                <button type="submit" className="sign-in-google-btn"><FcGoogle className="sign-in-google-icon"/>Continue with Google</button>
                <p className="sign-in-have-acc">Have an account? <Link to="/sign-in">Sign in</Link></p>
            </form>

        </main>
    </>
  )
}
