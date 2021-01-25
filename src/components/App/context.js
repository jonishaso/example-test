import React, { createContext, useState } from 'react'

export const colors = {
  blue: '#03619c',
  red: '#9c0312',
}

export const ColorContext = createContext(null)

export const themeSwitcher = Components => props => {
  const [btnThemeColor, setBtnThemeColor] = useState(colors.blue)

  return (
    <ColorContext.Provider value={{ btnThemeColor, setBtnThemeColor }}>
      <Components {...props} />
    </ColorContext.Provider>
  )
}
