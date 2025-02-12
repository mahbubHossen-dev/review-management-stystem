/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import * as motion from "motion/react-client"
const Slide = ({ image, text }) => {
  
  return (
    <div
      className='w-full h-32 bg-center bg-cover md:h-[38rem] rounded-md'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/30 rounded-md'>
        <div className='text-center'>
          <motion.h1 
          initial={{ y: 40 }}
          animate={{ y: -62 }}
          transition={{ duration: 1 }}
          className=' text-white lg:text-4xl  text-4xl font-bold bg-black/50 p-4 rounded-lg hidden md:block'>
            {text}
          </motion.h1>
          <br />

        </div>
      </div>
    </div>
  )
}

export default Slide
