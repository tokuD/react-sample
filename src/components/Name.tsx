import React from 'react'

const Name = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const divStyle: React.CSSProperties = {
    padding: '16px',
    backgroundColor: 'grey',
  }

  return (
    <div style={divStyle}>
      <label htmlFor="name">名前</label>
      <input type="text" id="name" className="input-name" onChange={onChange} />
    </div>
  )
}

export default Name
