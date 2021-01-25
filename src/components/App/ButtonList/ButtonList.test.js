import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ButtonList from './index'
import { ColorContext } from '../ButtonThemeContext'

const mockData = {
  btnThemeColor: '#03619cG',
  setBtnThemeColor: jest.fn(),
}

test('test Category Buttons', () => {
  const wrapper = shallow(
    <ColorContext.Provider value={{ ...mockData }}>
      <ButtonList btnValue={[-23, 45, 89, 1]} handleClick={() => {}} />
    </ColorContext.Provider>,
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})
