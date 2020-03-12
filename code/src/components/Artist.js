import React from 'react'
import './artist.css'

export const Artist = (props) => {
  const { artistLink, artistName } = props;

  return (
    <a href={artistLink}>{artistName}</a>
  )
}