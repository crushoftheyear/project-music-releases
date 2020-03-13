import React from 'react'
import { Artist } from './Artist.js'
import { AlbumCover } from './AlbumCover.js'
import { AlbumTitle } from './AlbumTitle.js'
import './albumcard.css'

export const AlbumCard = (props) => {
  const { artists, external_urls, images, name } = props.item;

  return (
    <article className="album-card">

      <AlbumCover images={images[0].url} />

      <AlbumTitle link={external_urls.spotify} title={name} />

      <h3>
        {artists.map(artist => {
          return <Artist key={artist.id} item={artist} />
        })}
      </h3>

    </article>
  )
}