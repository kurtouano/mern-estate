import { useState } from "react";
import "./SignIn.css";
import { RxEyeClosed, RxEyeOpen} from "react-icons/rx";

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
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                </div>
                <div className="sign-in-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="sign-in-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" id="password" required />
                    {showPassword ? <RxEyeOpen className="sign-in-show-pass-btn" onClick={togglePasswordVisibility} /> : <RxEyeClosed className="sign-in-show-pass-btn" onClick={togglePasswordVisibility}/> }
                </div>
                <button type="submit" className="sign-in-submit-btn">Sign in</button>
            </form>

        </main>
    </>
  )
}
