
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
const LEVEL2_SCOPE = LEVEL1_SCOPE;
const LEVEL2_RESPONSETYPE = LEVEL1_RESPONSETYPE;
const LEVEL2_REDIRECTURI = LEVEL1_REDIRECTURI;
const LEVEL2_CLIENT_ID = process.env.REACT_APP_LEVEL2_CLIENT_ID;
const LEVEL2_CLIENT_SECRET = process.env.REACT_APP_LEVEL2_CLIENT_SECRET;


/*
Enable Client:	true
Client ID:	0593a5a5-1702-48bf-961a-5d3b8f6e8565
Client Secret:	1gWxRCzqXucsvSeQRdSIWNNp_IeF1vZFUEy1UpnKTQUSyhNqsDv67v4LpIDc61Gw0Pz2En-dFoOB8H1Nv20-xw
Client Name:	RETA MVP
Client Type:	Web Based
Use Persistent Cookie:	False
Login Redirect URIs:	
http://localhost:3000
https://p-idm-bot7.med.umich.edu:8443/LetsOAuth/jsp/OAuthResponse.jsp
Grants Required:	Refresh TokenAuthorization CodeResource Owner CredentialsClient Credentials
Token Types:	CodeID TokenAccess Token
Always Issue New Token:	False

Authorization EndPoint: 	https://p-weblogin.med.umich.edu/nidp/oauth/nam/authz
Registration EndPoint: 		https://p-weblogin.med.umich.edu/nidp/oauth/nam/clients
Token EndPoint: 		https://p-weblogin.med.umich.edu/nidp/oauth/nam/token
Token Introspect EndPoint: 	https://p-weblogin.med.umich.edu/nidp/oauth/v1/nam/introspect
UserInfo EndPoint: 		https://p-weblogin.med.umich.edu/nidp/oauth/nam/userinfo
OpenID Metadata EndPoint: 	https://p-weblogin.med.umich.edu/nidp/oauth/nam/.well-known/openid-configuration
Revocation EndPoint: 		https://p-weblogin.med.umich.edu/nidp/oauth/nam/revoke
JSON Web Key Set Endpoint: 	https://p-weblogin.med.umich.edu/nidp/oauth/nam/keys
Logout EndPoint: 		https://p-weblogin.med.umich.edu/nidp/oauth/v1/nam/end_session

Issuer: https://p-weblogin.med.umich.edu/nidp/oauth/nam
*/



console.log(LEVEL2_CLIENT_ID);

function App () {
  return (
    <AuthProvider
      authority={LEVEL2_AUTHORITY}
      clientId={LEVEL2_CLIENT_ID}
      clientSecret={LEVEL2_CLIENT_SECRET}
      scope={LEVEL2_SCOPE}
      responseType={LEVEL2_RESPONSETYPE}
      redirectUri={LEVEL2_REDIRECTURI}
      autoSignIn={false}
    >
      <LoginScreen/>
    </AuthProvider>
  );
}

export default App;

