import { useAuth } from "oidc-react";

export function LoginScreen () {

    const auth = useAuth();

    return (
        <div>
            <button onClick={auth.signIn}>sign in</button>
        </div>
    )

}