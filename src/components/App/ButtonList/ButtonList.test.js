import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ButtonList from './index'

test('test Category Buttons', () => {
  const wrapper = shallow(<ButtonList btnValue={[-23, 45, 89, 1]} handleClick={() => {}} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
