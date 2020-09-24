import React from 'react'

export default function SearchBar({ ...props }) {
  return <input className="input--searchbar" type="text" {...props} />
}
