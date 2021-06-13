import { useState } from 'react'
import './App.css'
import WelcomePage from './components/welcome/welcomePage'
import ContentPage from './components/contents/contentPage'
import DisplayInventory from './components/displayInventory/displayInventory'
import AddInventory from './components/addInventory/addInventory'
import UpdateInventory from './components/updateInventory/updateInventory'
import PageNotAvailable from './components/pageNotAvailable/pageNotAvailable'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  const [data, setData] = useState()

  const selectInventory = (inv) => {
    console.log('App', inv)
    setData(inv)
    console.log('App-data', data)
  }
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <WelcomePage />
          </Route>
          <Route path='/contents'>
            <ContentPage />
          </Route>
          <Route path='/inventory'>
            <DisplayInventory selectInventory={selectInventory} />
          </Route>
          <Route path='/add'>
            <AddInventory />
          </Route>
          <Route path='/update/:id/:name/:desc/:price'>
            <UpdateInventory data={data} />
          </Route>
          <Route path='*'>
            <PageNotAvailable />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
