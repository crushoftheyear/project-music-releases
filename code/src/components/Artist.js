import React from 'react'
import './artist.css'

export const Artist = (props) => {
  return (
    <a href={props.artistLink}>{props.artistName}</a>
    // Moved <h3> to AlbumCard as a wrapper so it renders only once
  )
}