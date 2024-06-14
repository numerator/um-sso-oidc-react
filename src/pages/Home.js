import { useAuth } from "oidc-react";

export function HomeScreen() {

    const auth = useAuth();

    return (
        <div>
            <p>
                Welcome, {auth.userData?.profile?.preferred_username} !
            </p>
            <p>
                <button onClick={auth.signOut}>Log out</button>
            </p>
        </div>
    );


}