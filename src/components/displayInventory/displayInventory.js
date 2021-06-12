import React, { useState, useEffect } from 'react'
import './displayInventory.css'
import loading from './../../assets/images/loading.gif'
import ReactPaginate from 'react-paginate'

import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'

const url = `http://localhost:3004/inventory`

const DisplayInventory = (props) => {
  const [inventory, setInventory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  const itemsPerPage = 5
  const pagesVisited = pageNumber * itemsPerPage

  const getInventory = async () => {
    setIsLoading(true)
    await fetch(url).then((result) => {
      result.json().then((resp) => {
        setInventory(resp)
      })
    })
    setIsLoading(false)
  }
  async function deleteInventory(id) {
    await fetch(`http://localhost:3004/inventory/${id}`, {
      method: 'Delete',
    }).then((result) => {
      result.json().then(() => {
        getInventory()
      })
    })
  }
  const showInventory = inventory
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return (
        <tr key={item.id}>
          <td className='displayItems'>{item.id}</td>
          <td className='displayName'>{item.name}</td>
          <td className='displayDescription'>{item.desc}</td>
          <td className='displayPrice'>{item.price}</td>
          <td className='displayModify'>
            <Link
              to={`/update/${item.id}/${item.name}`}
              onClick={() => {
                props.selectInventory(item)
              }}
              title='Modify inventory'
            >
              <EditOutlinedIcon />
            </Link>
          </td>
          <td className='displayDelete'>
            <span title='Delete inventory'>
              <DeleteOutlinedIcon onClick={() => deleteInventory(item.id)} />
            </span>
          </td>
        </tr>
      )
    })

  useEffect(() => {
    getInventory()
  }, [])

  const pageCount = Math.ceil(inventory.length / itemsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <div className='displayWrapper clearfix'>
      <Link to='/' className='homeLink'>
        <HomeOutlinedIcon /> Home
      </Link>
      <div className='display-title'>Inventory</div>
      <div className='displaySection'>
        <table className='display-table'>
          <thead>
            <tr>
              <td className='displayItems'>Item No.</td>
              <td className='displayName'>Name</td>
              <td className='displayDescription'>Description</td>
              <td className='displayPrice'>Price</td>
              <td className='displayModify'>Modify</td>
              <td className='displayDelete'>Delete</td>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              <>
                {showInventory}{' '}
                <ReactPaginate
                  previousLabel={'Previous'}
                  nextLabel={'Next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationBtns'}
                  previousLinkClassName={'previousBtn'}
                  nextLinkClassName={'nextBtn'}
                  disabledClassName={'paginationDisabled'}
                  activeClassName={'paginationActive'}
                />{' '}
              </>
            ) : (
              <div className='loadingIcon'>
                <img src={loading} alt='loading' />
              </div>
            )}
          </tbody>
        </table>
      </div>
      <Link to='/add' className='displayAdd' title='Add new inventory'>
        <AddCircleRoundedIcon />
      </Link>
    </div>
  )
}

export default DisplayInventory
