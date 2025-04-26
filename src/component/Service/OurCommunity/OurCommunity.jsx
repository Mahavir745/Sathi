import React from 'react'
import Digital from './Digital'
import Latest from './Latest'
import Members from './Members'
import Footer from '../../Footer/Footer'

const OurCommunity = () => {
  return (
    <div>
      <div className=' w-[1458px] min-h-[400px] m-auto flex justify-between mt-30'>
        {/* Memebers */}
        <Members />

        {/* digital */}
        <div>
          <Digital />
          <Digital />
        </div>

        {/* Latest */}
        <Latest />
      </div>
      <Footer/>
    </div>
  )
}

export default OurCommunity