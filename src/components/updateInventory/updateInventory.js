import React, { useState } from 'react'
import './updateInventory.css'
import { withRouter } from 'react-router-dom'
import ContentModal from '../contents/contentModal/contentModal'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

function UpdateInventory(props) {
  const [id] = useState(props.match.params.id)
  const [name, setName] = useState(props.match.params.name)
  const [desc, setDesc] = useState(props.match.params.description)
  const [price, setPrice] = useState(props.match.params.price)
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

  const submitForm = (e) => {
    e.preventDefault()
    modifyData()
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
          <div className='updateSubmitBtn'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(UpdateInventory)
