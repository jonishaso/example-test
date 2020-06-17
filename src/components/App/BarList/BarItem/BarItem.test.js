import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BarItem from './index'

test('test BarItem', () => {
  const wrapper = shallow(<BarItem key={9} progress={90} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
