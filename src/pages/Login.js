import { useAuth } from "oidc-react";
import './Login.css';

export function LoginScreen () {

    const auth = useAuth();
    return (
        <div class="Login">
            <p>
                Welcome to RETA! Please log in.
            </p>
            <p>
                <button onClick={auth.signIn}>Log In with Level 2 Password</button>
            </p>
        </div>
    );
}