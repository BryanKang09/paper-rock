import React from 'react'

const Box = (props) => {
    console.log(props)
  return (
    <>
        <div className={`box ${props.result}`}>
            <h1>
                {props.title}
            </h1>
            
            <img src={props.item && props.item.image} className='box-image'></img> {/* conditional rendering  */}

            <h2>
                {/* {props.result} */}
            </h2>
            
        </div>


    </>
  )
}

export default Box
