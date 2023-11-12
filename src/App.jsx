

import './App.css'
import { DataProvider } from './Context/DataProvider';
import { Router } from './Routes/Router';
function App() {



  return (
      <DataProvider>
        <Router />
      </DataProvider>
  )
}

export default App
