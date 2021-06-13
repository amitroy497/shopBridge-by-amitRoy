import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'
import './pageNotAvailable.css'
import ErrorPage from './../../assets/images/ErrorPage.gif'

function PageNotAvailable() {
  return (
    <div className='pageNotAvailableWrapper'>
      <img src={ErrorPage} alt='404Error' />
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
    </div>
  )
}

export default PageNotAvailable
