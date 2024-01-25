import './App.css'

import store from './store/store'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Preferiti from './pages/Preferiti'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/preferiti' element={<Preferiti />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
