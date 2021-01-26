import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonList from './index'
import { ColorContext } from '../ButtonThemeContext'

const mockData = {
  btnThemeColor: '#03619c',
  setBtnThemeColor: jest.fn(),
}

test('test Category Buttons', () => {
  const { debug } = render(
    <ColorContext.Provider value={{ ...mockData }}>
      <ButtonList btnValue={[-23, 45, 89, 1]} handleClick={jest.fn()} />
    </ColorContext.Provider>,
  )
  debug()
  expect(screen.getAllByRole('button').length).toBe(5)
  fireEvent.click(screen.getByTestId('context-button'))
  expect(screen.getByTestId('context-button')).toHaveStyle('background-color: #9c0312')
})
