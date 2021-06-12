import React from 'react'
import './contentPage.css'
import { Link } from 'react-router-dom'
import Content from './content'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
const ContentPage = () => {
  return (
    <div className='contentsWrapper clearfix'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <Content />
    </div>
  )
}

export default ContentPage
