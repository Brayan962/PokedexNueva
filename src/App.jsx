
import {BrowserRouter, Routes, Route} from 'react-router';
import { DashBoard } from './pages/Dashboard'
import { Layout } from './pages/Layout';
import { Detail } from './pages/Detail';
import { MyCollection } from './pages/MyCollection';
function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/my-collection" element={<MyCollection />} />
        <Route path="/about-me" element={<section>About Me</section>} />
        <Route path="/detail/:pokecod" element={<Detail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App