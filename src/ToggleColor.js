import React from 'react'

const ToggleColor = ({isblack,setisblack}) => {
  return (
    <div>
        <button className='toggbtn' onClick={()=>setisblack(!isblack)}>Toggle Text Color</button>
    </div>
  )
}

export default ToggleColor