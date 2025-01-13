import React from 'react'

function Footer() {
  return (
    <div className='my-7'>
      {/* <hr /> */}
      <hr />
      <br />
      <h2 className='text-center text-gray-400'> &lt; Built by : Hitansu &gt; </h2>
      <h2 className='text-center text-gray-400'> Support the development by Starring it ⭐</h2>
      <div className="flex justify-center py-2">
        <a  href="https://github.com/Hitansu2004">
        <button className="bg-black border border-white rounded-none text-white px-3 py-1">Star it</button>
        </a>
      </div>
    </div>
  )
}

export default Footer
