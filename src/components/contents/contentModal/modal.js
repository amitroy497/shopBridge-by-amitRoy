import React from 'react'
import ReactDom from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'

function Modal({ open, children, onClose }) {
  if (!open) {
    return null
  }
  return ReactDom.createPortal(
    <>
      <div className='overlayPopUp' />
      <div className='modalPopUp'>
        <CloseIcon className='closeModalPopUp' onClick={onClose} />
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
