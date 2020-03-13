import React from 'react'
import { Artist } from './Artist.js'
import { AlbumCover } from './AlbumCover.js'
import './albumcard.css'

export const AlbumCard = (props) => {
  const { artists, external_urls, images, name } = props.item;

  return (
    <article className="album-card">

      <AlbumCover images={images[0].url} />

      <h2>
        <a href={external_urls.spotify}>{name}</a>
      </h2>

      <h3>
        {artists.map(artist => {
          return (
            <Artist
              key={artist.id}
              item={artist}
            />
          )
        })}
      </h3>

    </article>
  )
}