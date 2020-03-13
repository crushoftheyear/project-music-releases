import React from 'react'
import './artist.css'

export const Artist = (props) => {
  const { external_urls, name } = props.item

  return <a href={external_urls.spotify}>{name}</a>
}