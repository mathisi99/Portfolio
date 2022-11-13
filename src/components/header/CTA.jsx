import React from 'react'

const CTA = ({CVs}) => {
  return (
    <div className='cta'>
        {CVs.map(obj => <a key={obj.CV.split("/".at(-1))} href={obj.CV} download className='btn'>{obj.downloadDescription}</a>)}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA