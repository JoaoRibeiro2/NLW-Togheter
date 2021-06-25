import {createContext, useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import {Home} from './pages/Home'
import {NewRoom} from './pages/NewRoom'

import './styles/globals.scss'

export const TestContenxt = createContext({} as any)

function App() {
  const [value, setValue] = useState('Teste')

  return (
    
      <BrowserRouter>
          <TestContenxt.Provider value={{value, setValue}}>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/rooms/new' component={NewRoom} />
          </TestContenxt.Provider>
  
      </BrowserRouter>

  );
}

export default App;
