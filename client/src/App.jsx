import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
