import React from 'react'
const AppComponent = require('./App').default
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import fetchData from 'localHelper/api'

const MOCK_UP_DATA = {
  bars: [50, 60, 70, 80],
  buttons: [20, 30, -20, -30],
  limit: 100,
}
jest.mock('localHelper/api', () => jest.fn())
// beforeEach(() => {
//   fetchData.mockReturnValue(new Promise(resolve => resolve(MOCK_UP_DATA)))
// })

test('bar init status', async () => {
  fetchData.mockImplementationOnce(() => Promise.resolve(MOCK_UP_DATA))
  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  expect(
    wrapper
      .find('ul')
      .childAt(0)
      .text(),
  ).toEqual('50.00%')
})

test('button click', async () => {
  fetchData.mockImplementationOnce(() => Promise.resolve(MOCK_UP_DATA))
  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  wrapper
    .find('#button-list')
    .childAt(0)
    .simulate('click')
  // console.log(wrapper.find('#bar-item-0').debug())
  expect(
    wrapper
      .find('ul')
      .childAt(0)
      .text(),
  ).toEqual('70.00%')
})

test('dropdown selection and button click', async () => {
  fetchData.mockImplementationOnce(() => Promise.resolve(MOCK_UP_DATA))
  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  wrapper.find('select').simulate('change', { target: { value: '1' } })
  wrapper.update()

  wrapper
    .find('#button-list')
    .childAt(0)
    .simulate('click')
  // console.log(wrapper.find('#bar-item-1').debug())
  expect(
    wrapper
      .find('ul')
      .childAt(1)
      .text(),
  ).toEqual('80.00%')
})

test('fetch with http error', async () => {
  fetchData.mockImplementationOnce(() => Promise.reject('wrong fetching'))

  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  expect(wrapper.find('h2').text()).toBe('Cannot Fetch data')
})
