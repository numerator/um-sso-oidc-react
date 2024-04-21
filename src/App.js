
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

const LEVEL2_AUTHORITY = "https://p-weblogin.med.umich.edu/nidp/oauth/nam/";
const LEVEL2_SCOPE = "retaonthego";
const LEVEL2_RESPONSETYPE = LEVEL1_RESPONSETYPE;
const LEVEL2_REDIRECTURI = LEVEL1_REDIRECTURI;
const LEVEL2_CLIENT_ID = process.env.REACT_APP_LEVEL2_CLIENT_ID;
const LEVEL2_CLIENT_SECRET = process.env.REACT_APP_LEVEL2_CLIENT_SECRET;

function App () {
  return (
    <AuthProvider
      authority={LEVEL2_AUTHORITY}
      clientId={LEVEL2_CLIENT_ID}
      clientSecret={LEVEL2_CLIENT_SECRET}
      scope={LEVEL2_SCOPE}
      responseType={LEVEL2_RESPONSETYPE}
      redirectUri={LEVEL2_REDIRECTURI}
      autoSignIn={true}
      onSignIn={user=>{console.log('logged in!', user)}}
    >
      <LoginScreen/>
    </AuthProvider>
  );
}

export default App;

