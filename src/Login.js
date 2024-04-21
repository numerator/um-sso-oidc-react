import { useAuth } from "oidc-react";


export function LoginScreen () {
    const auth = useAuth();
    console.log(auth.userData);


    if (auth.userData) {
        return (
            <div>
                <p>
                    Welcome, {auth.userData.profile.preferred_username} !
                </p>
                <p>
                    <button onClick={auth.signOut}>Log out</button>

                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p>
                    We are here.
                </p>
                <p>
                    <button onClick={auth.signIn}>Log In</button>
                </p>
            </div>
        )
    }

}