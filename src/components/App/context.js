import { createContext } from 'react'

export const colors = {
  blue: '#03619c',
  red: '#9c0312',
  yellow: '#8c8f03',
}

export const ColorContext = createContext(colors.blue)
