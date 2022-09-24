
import './App.css';
import { AuthProvider } from './context/AuthContext';
import {MDBContainer} from 'mdb-react-ui-kit'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './component/Login'
import { Register } from './component/Register'

function App() {
  return (
    <MDBContainer className='d-flex align-items-center justify-content-center'>
    <Router>
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthProvider>
    </Router>

    </MDBContainer>

  );
}

export default App;
