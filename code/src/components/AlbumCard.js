import React from 'react'
import { HoverOverlay } from './HoverOverlay.js'
import { Artist } from './Artist.js'
import './albumcard.css'

export const AlbumCard = (props) => {
  return (
    <article className="album-card">

      <a className="album-cover" href={props.albumLink}>
        <img src={props.src} alt=""></img>
        <HoverOverlay />
      </a>

      <h2>{props.title}</h2>

      {props.artists.map(artist => {
        return (
          <Artist
            key={artist.id}
            artistName={artist.name}
            artistLink={artist.external_urls.spotify}
          />
        )
      })}

    </article>
  )
}