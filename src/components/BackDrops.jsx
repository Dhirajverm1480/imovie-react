import React from 'react'

const BackDrops = ({backDrop}) => {
  return (
    // <div className="bg-contain bg-no-repeat bg-fixed w-full h-96"
    //   style={{ backgroundImage: `url(${backDrop})` }}>
    // </div>
    <div>
        <img src={backDrop} alt="" />
    </div>
  )
}

export default BackDrops
