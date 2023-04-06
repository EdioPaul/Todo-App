import React from 'react'

export default props => (
  <header tabIndex={0} className='page-header'>
    <h2>{props.name} <small>{props.small}</small></h2>
  </header>
)