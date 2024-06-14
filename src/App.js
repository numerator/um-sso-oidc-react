
import { useAuth } from 'oidc-react';
import { LoginScreen } from './pages/Login';
import { HomeScreen } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App () {
  const auth = useAuth();

  console.log('auth object:', auth);

  if (auth.userData) { // user is logged in
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <LoginScreen />
    ); 
  }
}

export default App;

