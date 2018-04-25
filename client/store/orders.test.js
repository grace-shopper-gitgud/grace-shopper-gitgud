/* eslint-env mocha,chai */

import {expect} from 'chai'
import {getOrders, gotOrders} from './orders'
import {mockAxios, mockStore} from './testconfig';


describe('thunk creators', () => {
  let store
  const initialState = {orders: []}

  beforeEach(() => {
    mockAxios.reset()
    store = mockStore(initialState)
  })

  describe('getOrders', () => {
    it('eventually dispatches the GOT_ORDERS action', async () => {
      const fakeOrders = [{status: "COMPLETED", email: 'tyler@test.com'}, {status: "COMPLETED", email: 'tyler@test.com'}, {status: "COMPLETED", email: 'tyler@test.com'}];
      mockAxios.onGet('/api/orders/1').replyOnce(200, fakeOrders)
      await store.dispatch(getOrders(1))
      const [getOrdersAction] = store.getActions();
      expect(getOrdersAction.type).to.be.equal('GOT_ORDERS')
      expect(getOrdersAction.orders).to.be.deep.equal(fakeOrders)
    })
  })
})