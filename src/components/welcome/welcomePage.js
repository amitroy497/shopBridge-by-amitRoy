import React from 'react'
import './welcomePage.css'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function WelcomePage() {
  return (
    <div className='welcomeWrapper'>
      <h1 className='welcome-title'>Welcome</h1>
      <h1 className='to-title'>To</h1>
      <h1 className='shop-title'>Shop</h1>
      <h1 className='bridge-title'>Bridge</h1>
      <div className='goToNextPage'>
        Click on next to continue{' '}
        <Link to='/contents' className='next' title='Next'>
          <NavigateNextIcon className='welcomeNextIcon' />
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage
