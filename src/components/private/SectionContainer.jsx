import React from 'react'

const SectionContainer = ({children}) => {
  return (
    <section className='w-full flex flex-col gap-4 bg-white p-8 rounded-xl'>
        {children}
    </section>
  )
}

export default SectionContainer