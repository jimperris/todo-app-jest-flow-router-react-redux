import VisibilityFilter from './visibilityFilter.jsx'
import {mount} from 'enzyme'
import React from 'react'
describe('reducer', () => {
  const wrap = mount(
    <VisibilityFilter filter={'SHOW_COMPLETED'} />
  )
  it('should highlight the selected filter', () => {
    expect(wrap.find('.showCompleted').prop('style')).toEqual({color: 'blue'})
    expect(wrap.find('.showAll').prop('style')).toEqual({color: 'black'})
  })
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
