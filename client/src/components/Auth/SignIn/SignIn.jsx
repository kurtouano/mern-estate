import { useState } from "react";
import "../shared/AuthForm.css";
import { RxEyeClosed, RxEyeOpen} from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignInComponent() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

  return (
    <> 
        <main className="sign-in-container">
            
            <h1>Sign in</h1>
            <form action="/api/auth/signin" method="POST">
                <div className="sign-in-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="sign-in-input">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" required />
                    {showPassword ? <RxEyeOpen className="sign-in-show-pass-btn" onClick={togglePasswordVisibility} /> : <RxEyeClosed className="sign-in-show-pass-btn" onClick={togglePasswordVisibility}/> }
                </div>
                <div className="sign-in-forget-pass-container">
                    <div className="sign-in-remember-me-container">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="" className="sign-in-forgot-pass">Forgot password?</a>
                </div>

                <button type="submit" className="sign-in-submit-btn">Sign in</button>
                <button type="submit" className="sign-in-google-btn"><FcGoogle className="sign-in-google-icon"/>Continue with Google</button>
                <p className="sign-in-have-acc">Dont have an account? <Link to="/sign-up">Sign up</Link></p>
            </form>

        </main>
    </>
  )
}
