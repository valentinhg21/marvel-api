import React from 'react'
import { Link } from 'react-router-dom'


export const Hero = ({title, id, thumbnail}) => {
 
  const src = `${thumbnail.path}.${thumbnail.extension}`
  const myStyle ={
    backgroundImage : `url(${src})`
  }
  const bg = `url(${src});`
  const url = `/series/${id}`
  return (
    <div className="Hero" style={myStyle} >
        <div className="Hero__content" >
            <h1>{title}</h1>
        
        </div>
    </div>
  )
}
