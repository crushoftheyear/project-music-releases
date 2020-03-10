import React from 'react'
import data from './data.json'
import { AlbumCard } from './components/AlbumCard.js'

export const App = () => {
  return (
    <section>
      <h1>News albums & singles</h1>

      <div className="album-container">

        {data.albums.items.map(album => {
          return (
            <AlbumCard
              key={album.id}
              albumLink={album.external_urls.spotify}
              src={album.images[0].url}
              title={album.name}
              artists={album.artists} // This is used to map each artist in AlbumCard
            />
          )
        })}
      </div>
    </section>
  )
}
