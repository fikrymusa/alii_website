import React from 'react'
import { BUTTON_LINK } from '../../ButtonComp'
import ScrambleText from '../../ScrambleText'

const JoinUs = () => {
  return (
      <section className="py-16 md:py-32 lg:py-44 bg-abu_soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900 mb-4">
                   <ScrambleText
              text="Join Our Community"
              className="gradient-text"
              delay={0.9}
            />
            
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep evaluation goes beyond resume basics to spot true role fit
          </p>
          <div className='flex items-center justify-center mt-4'>
          <BUTTON_LINK />

          </div>

        </div>

      </div>
    </section>
  )
}

export default JoinUs