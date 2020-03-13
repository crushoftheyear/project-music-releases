import React from 'react'
import data from './data.json'
import { AlbumCard } from './components/AlbumCard.js'
import './app.css'

export const App = () => {
  return (
    <section>
      <h1>News albums & singles</h1>
      <div className="album-container">

        {data.albums.items.map(album => {
          return <AlbumCard key={album.id} item={album} />
        })}

      </div>
    </section>
  )
}
