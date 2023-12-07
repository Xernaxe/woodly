import React from 'react'

export const HeroImage = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className='pb-4 paddingsX bg-[linear-gradient(0deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_50%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,1)_100%)]  translate-y-1'>
				<div className='maxW w-full  desktop:m-auto'>
					<div className='relative flex justify-center gap-8 '>
						{children}
					</div>
				</div>
			</div>
  )
}
