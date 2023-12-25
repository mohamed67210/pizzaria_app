import React from 'react'

function HeaderSection({subHeader,mainHeader}) {
  return (
    <div className='text-center mb-4'>
        <h3 className='uppercase text-secondary font-semibold leading-4'>{subHeader}</h3>
        <h2 className=' text-primary font-bold text-4xl italic'>{mainHeader}</h2>
    </div>
  )
}

export default HeaderSection