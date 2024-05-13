import React from 'react'
import { PropC } from './GreetTyp'

const Greet = (p:PropC) => {
  return (
    <div>Hello {p.name}</div>
  )
}

export default Greet