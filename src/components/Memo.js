import React from 'react'

function Memo({name}) {
  return (
    console.log("Memo Component Rendered"),
    <div>{name}</div>
  )
}

export default React.memo(Memo)