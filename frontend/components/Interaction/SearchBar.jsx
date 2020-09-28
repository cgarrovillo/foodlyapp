import React from 'react'

export default function SearchBar({ ...props }) {
  return (
    <input
      className="input--big input--round"
      type="text"
      placeholder="Search"
      {...props}
    />
  )
}
