import React, { useState } from 'react'
import './addInventory.css'
import ContentModal from '../contents/contentModal/contentModal'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { nameValidation, priceValidation } from '../validation/validation'
import { formatter } from './../currencyFormatter/currencyFormatter'

const url = `http://localhost:3004/inventory`

const AddInventory = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [nameFlag, setNameFlag] = useState(true)
  const [priceFlag, setPriceFlag] = useState(true)
  const [successMsg, setSuccessMsg] = useState(false)

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
  const giveName = (e) => {
    setSuccessMsg(false)
    let checkName = nameValidation(e.target.value)
    if (checkName) {
      setName(e.target.value)
      setNameFlag(true)
    } else {
      setName('')
      setNameFlag(false)
    }
  }

  const givePrice = (e) => {
    setSuccessMsg(false)
    var newPrice = e.target.value
    let checkPrice = priceValidation(newPrice)
    if (checkPrice) {
      newPrice = parseFloat(newPrice).toFixed(2)
      newPrice = formatter.format(newPrice)
      setPrice(newPrice)
      setPriceFlag(true)
    } else {
      setPrice('')
      setPriceFlag(false)
    }
  }

  const giveDesc = (e) => {
    setSuccessMsg(false)
    setDesc(e.target.value)
  }
  const submitInventoryDetails = (e) => {
    e.preventDefault()
    if (name.length && price.length) {
      postInventory()
      setSuccessMsg(true)
    }
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
              onChange={giveName}
              required
            />
          </div>
          {!nameFlag ? (
            <p className='msg'>Please enter a correct name</p>
          ) : null}
          <div>
            <label>Description: </label>
            <textarea
              placeholder='Please enter the description...'
              onChange={giveDesc}
            ></textarea>
          </div>
          <div>
            <label>Price: </label>
            <input
              type='text'
              placeholder='Please enter the price...'
              onChange={givePrice}
              required
            />
          </div>
          {!priceFlag ? (
            <p className='msg'>Please enter a correct price</p>
          ) : null}
          <br />
          <br />
          <div className='addSubmitBtn'>
            <button>Submit</button>
          </div>
          {successMsg ? (
            <p className='msg'>New inventory added successfully</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default AddInventory
