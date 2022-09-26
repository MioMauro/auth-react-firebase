
import './App.css';
import { AuthProvider } from './context/AuthContext';
import {MDBContainer} from 'mdb-react-ui-kit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './component/Login'
import { Register } from './component/Register'
import PrivateRoute from './component/PrivateRoute';
import Dashboard from './component/Dashboard';
import ForgotPassword from './component/ForgotPassword';
import UpdateProfile from './component/UpdateProfile';

function App() {
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/' element={<PrivateRoute>
              <Dashboard />
        </PrivateRoute>}           
        />

      <Route path='/update-profile' element={<PrivateRoute>
              <UpdateProfile />
        </PrivateRoute>}           
        />
      </Routes>
    </AuthProvider>
    </Router>

    </MDBContainer>

  );
}

export default App;
