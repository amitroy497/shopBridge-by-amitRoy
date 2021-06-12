import React, { useState } from 'react'
import './contentModal.css'
import Modal from './modal'
import TocIcon from '@material-ui/icons/Toc'
import Content from './../content'

function ContentModal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div title='Contents Menu'>
        <TocIcon className='contentMenu' onClick={() => setIsOpen(true)} />
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Content />
      </Modal>
    </>
  )
}

export default ContentModal
