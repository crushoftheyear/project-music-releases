import React from 'react'

export const Artist = (props) => {
  return (

    <a href={props.artistLink}>
      <h3>{props.artistName}</h3>
    </a>

  )
}