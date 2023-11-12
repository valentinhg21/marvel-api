import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({name, thumbnail,type, id }) => {

  let src = `${thumbnail.path}.${thumbnail.extension}`
  const URL = `/${type}/${id}`
 
  return (
    <div className="Item">
        <div  className="Item__card">
            <img className="Item__img" loading="lazy" src={src} alt="" />
            <p>{name}</p>

        </div>
    </div>
  )
}

