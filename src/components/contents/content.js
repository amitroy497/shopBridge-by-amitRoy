import React from 'react'
import { Link } from 'react-router-dom'
import LinkIcon from '@material-ui/icons/Link'
function Content() {
  return (
    <>
      <div className='header'>Contents</div>
      <div className='contentsSection'>
        <table className='contents-table'>
          <thead>
            <tr>
              <td>S.No.</td>
              <td>Contents</td>
              <td>Links</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Display Inventory</td>
              <td>
                <Link to='/inventory' title='Display Inventory'>
                  <LinkIcon />
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Add Inventory</td>
              <td>
                <Link to='/add' title='Add Inventory'>
                  <LinkIcon />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Content
