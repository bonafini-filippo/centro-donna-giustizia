import React from 'react'

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className='text-4xl font-semibold uppercase py-4 ml-2'>
            {children}
        </h1>
    )
}

export default Title