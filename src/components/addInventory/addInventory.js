import React, { useState } from 'react'
import './addInventory.css'
import ContentModal from '../contents/contentModal/contentModal'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

const url = `http://localhost:3004/inventory`

const AddInventory = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')

  const postInventory = async () => {
    const inv = { name, desc, price }
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inv),
    }).then((result) => {
      result.json()
    })
  }

  const submitInventoryDetails = (e) => {
    e.preventDefault()
    postInventory()
  }

  return (
    <div className='addInventoryWrapper clearfix'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='header'>Add Inventory</div>
      <ContentModal />
      <div className='addInventorySection'>
        <form onSubmit={submitInventoryDetails}>
          <div>
            <label>Name: </label>
            <input
              type='text'
              placeholder='Please enter the name...'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description: </label>
            <textarea
              placeholder='Please enter the description...'
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Price: </label>
            <input
              type='text'
              placeholder='Please enter the price...'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div className='addSubmitBtn'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddInventory
