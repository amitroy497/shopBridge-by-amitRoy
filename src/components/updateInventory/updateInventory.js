import React, { useState } from 'react'
import './updateInventory.css'
import { withRouter } from 'react-router-dom'
import ContentModal from '../contents/contentModal/contentModal'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { nameValidation, priceValidation } from '../validation/validation'
import { formatter } from './../currencyFormatter/currencyFormatter'

function UpdateInventory(props) {
  const [id] = useState(props.match.params.id)
  const [name, setName] = useState(props.match.params.name)
  const [desc, setDesc] = useState(props.match.params.desc)
  const [price, setPrice] = useState(
    props.match.params.price.replace(/,/g, '').slice(1).replace(/,/g, '')
  )
  const [nameFlag, setNameFlag] = useState(true)
  const [priceFlag, setPriceFlag] = useState(true)
  const [successMsg, setSuccessMsg] = useState(false)

  async function modifyData() {
    const user = { name, desc, price }
    await fetch(`http://localhost:3004/inventory/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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

  const submitForm = (e) => {
    e.preventDefault()
    if (name.length && price.length) {
      modifyData()
      setSuccessMsg(true)
    }
  }

  return (
    <div className='updateInventoryWrapper clearfix'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='header'>Update Contact</div>
      <ContentModal />
      <div className='updateInventorySection'>
        <form onSubmit={submitForm}>
          <div>
            <label>Name: </label>
            <input
              type='text'
              placeholder='Please enter the name...'
              value={name}
              onChange={giveName}
            />
          </div>
          {!nameFlag ? (
            <p className='msg'>Please enter a correct name</p>
          ) : null}
          <div>
            <label>Description: </label>
            <textarea
              placeholder='Please enter the description...'
              value={desc}
              onChange={giveDesc}
            ></textarea>
          </div>
          <div>
            <label>Price: </label>
            <input
              type='text'
              placeholder='Please enter the price...'
              defaultValue={price}
              onChange={givePrice}
            />
          </div>
          {!priceFlag ? (
            <p className='msg'>Please enter a correct price</p>
          ) : null}
          <br />
          <br />
          <div className='updateSubmitBtn'>
            <button>Submit</button>
          </div>
          {successMsg ? (
            <p className='msg'>Inventory updated successfully</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default withRouter(UpdateInventory)
