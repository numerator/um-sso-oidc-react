
import { AuthProvider } from 'oidc-react';
import { LoginScreen } from './Login';
import './App.css';

//const LEVEL1_AUTHORITY = "https://shibboleth.umich.edu/idp/profile/oidc/authorize"

const LEVEL1_AUTHORITY = "https://shibboleth.umich.edu/";
const LEVEL1_SCOPE = "openid profile email eduperson_affiliation";
const LEVEL1_RESPONSETYPE = "code";
const LEVEL1_REDIRECTURI = "http://localhost:3000";
const LEVEL1_CLIENT_ID = process.env.REACT_APP_LEVEL1_CLIENT_ID;
const LEVEL1_CLIENT_SECRET = process.env.REACT_APP_LEVEL1_CLIENT_SECRET;

console.log(LEVEL1_CLIENT_ID);

function App () {
  return (
    <AuthProvider
      authority={LEVEL1_AUTHORITY}
      clientId={LEVEL1_CLIENT_ID}
      clientSecret={LEVEL1_CLIENT_SECRET}
      scope={LEVEL1_SCOPE}
      responseType={LEVEL1_RESPONSETYPE}
      redirectUri={LEVEL1_REDIRECTURI}
    >
      <LoginScreen/>
    </AuthProvider>
  );
}

export default App;

