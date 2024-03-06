import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
