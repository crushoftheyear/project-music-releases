import React from 'react'
import { HoverOverlay } from './HoverOverlay.js'

export const AlbumCover = (props) => {
  const { images } = props

  return (
    <div className="album-cover">
      <img src={images} alt=""></img>
      <HoverOverlay />
    </div>
  )
}