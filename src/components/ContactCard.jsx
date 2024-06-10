import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'
import { RxPencil2 } from 'react-icons/rx'

const ContactCard = ({contact}) => {
  return (
    <div
            key={contact.id}
            className=" flex bg-yellow rounded-lg p-2 justify-between items-center mt-2"
          >
            <div className="flex gap-2 items-center">
              <FaRegUser className="text-orange text-3xl" />
              <div className="ml-2">
                <h2 className="font-bold">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RxPencil2 className="text-2xl cursor-pointer"/>
              <FiTrash className="text-2xl cursor-pointer text-orange"/>
            </div>
          </div>
  )
}

export default ContactCard