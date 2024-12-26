/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const Slide = ({ image, text }) => {
  
  return (
    <div
      className='w-full bg-center bg-cover md:h-[38rem] rounded-md'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/30 rounded-md'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />

        </div>
      </div>
    </div>
  )
}

export default Slide
