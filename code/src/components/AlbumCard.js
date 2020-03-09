import React from 'react'
import { HoverOverlay } from './HoverOverlay.js'
import './albumcard.css'
import './hover.css'

export const AlbumCard = (props) => {
  return (
    <article className="album-card">
      <a className="album-cover" href={props.albumLink}>
        <img src={props.src}></img>
        <HoverOverlay />
      </a>

      <h2>{props.title}</h2>

      {props.artist.map(artist => {
        return (
          <a key={artist.artistLink} href={artist.artistLink}>
            <h3 key={artist.name}>{artist.name}</h3>
          </a>
        )
      })}

    </article>
  )
}