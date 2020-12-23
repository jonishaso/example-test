import React from 'react'
const AppComponent = require('./App').default
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import fetchData from 'localHelper/api'

jest.mock('localHelper/api', () => jest.fn())
// beforeEach(() => {
//   fetchData.mockReturnValue(new Promise(resolve => resolve(MOCK_UP_DATA)))
// })

test('fetch with http error', async () => {
  fetchData.mockImplementationOnce(() => Promise.reject('wrong fetching'))

  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  expect(wrapper.find('h2').text()).toBe('Cannot Fetch data')
})

it('when figure goes above 100', async () => {
  fetchData.mockReturnValueOnce(
    new Promise(resolve =>
      resolve({
        bars: [50, 50],
        buttons: [51, -51],
        limit: 100,
      }),
    ),
  )
  const AppComponent = require('./App').default
  let wrapper
  await act(async () => {
    wrapper = mount(<AppComponent />)
  })
  wrapper.update()
  wrapper.find('select').simulate('change', { target: { value: '1' } })

  wrapper
    .find('#button-list')
    .childAt(0)
    .simulate('click')
  expect(
    wrapper
      .find('ul')
      .childAt(1)
      .text(),
  ).toEqual('101.00%')
  wrapper
    .find('#button-list')
    .childAt(1)
    .simulate('click')
  wrapper
    .find('#button-list')
    .childAt(1)
    .simulate('click')
  expect(
    wrapper
      .find('ul')
      .childAt(1)
      .text(),
  ).toEqual('0.00%')
})
