// import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

function LogInButton() {
    const auth = useAuth();
    
    //set token
    //set token to date expiration
    // useEffect{() => {
    //     console.log("New user.");
    //     const data
    //     document.cookie = `auth_token=${}`
    // }}

    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => void auth.removeUser()}>Log out</button>
        </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default LogInButton;