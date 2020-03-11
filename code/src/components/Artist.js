import React from 'react'
import './artist.css'

export const Artist = (props) => {
  return (
    <a href={props.artistLink}>{props.artistName}</a>
  )
}