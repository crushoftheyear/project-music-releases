import React from 'react'

export const AlbumTitle = (props) => {
  const { link, title } = props

  return (
    <h2>
      <a href={link}>{title}</a>
    </h2>
  )
}