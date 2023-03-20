import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, info, id, glass}) => {
  return (
    <article className='cocktail'>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="btn btn-primary btn-details">details</button>
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
