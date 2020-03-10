import React from 'react'
import { HoverOverlay } from './HoverOverlay.js'
import { Artist } from './Artist.js'
import './albumcard.css'

export const AlbumCard = (props) => {
  return (
    <article className="album-card">

      <div className="album-cover">
        <img src={props.src} alt=""></img>
        <HoverOverlay />
      </div>

      <h2>
        <a href={props.albumLink}>{props.title}</a>
      </h2>


      <h3>
        {props.artists.map(artist => {
          return (
            <Artist
              key={artist.id}
              artistName={artist.name}
              artistLink={artist.external_urls.spotify}
            />
          )
        })}
      </h3>

    </article>
  )
}