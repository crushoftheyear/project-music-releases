import React from 'react'

export const AlbumCard = (props) => {
  return (
    <article>
      <a href={props.albumLink}>
        <img src={props.src}></img>
      </a>
      <h2>{props.title}</h2>

      {props.artist.map(artist => {
        return <a key={artist.artistLink} href={artist.artistLink}><h3 key={artist.name}>{artist.name}</h3></a>
      })}

    </article>
  )
}