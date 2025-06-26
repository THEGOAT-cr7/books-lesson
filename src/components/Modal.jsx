import React from 'react'

function Modal({ closeModal }) {
  return (
    <div className=' bg-white/20 w-full h-screen fixed top-0 mx-auto'>
      <div className='bg-gray-500 absolute right-1/3 top-1/3 p-5'>
        <div className=" relative">
          <button onClick={() => closeModal(false)} className='text-black absolute -top-1 font-semibold right-1'>X</button>
          <div className='py-5'>
            <h1>This book is about</h1>
          </div>
          {/* body */}
          <div className='pb-5'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dicta.</p>
          </div>
          {/* footer */}
          <div className="flex gap-3">
            <button className='p-2 btn btn-neutral bg-red-500' onClick={() => closeModal(false)} on>Cancel</button>
            <button className='p-2 btn btn-neutral bg-green-600' onClick={() => closeModal(false)} on>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal