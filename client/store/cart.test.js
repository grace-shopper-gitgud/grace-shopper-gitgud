import {expect} from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunks from 'redux-thunk';
import {createMemoryHistory} from 'history';
import {fetchCart, gotCart} from './cart';


const history = createMemoryHistory();
const mockAxios = new MockAdapter(axios);
const middlewares = [thunks.withExtraArgument({axios, history})];
const mockStore = configureMockStore(middlewares);

describe('Cart store', () => {
  let store;
  const initialState = {cart: []};

  beforeEach(() => {
    mockAxios.reset();
    store = mockStore(initialState);
  });

  describe('GET CART', () => {
    it('eventually dispatches GET CART action', async () => {
      const product = [{title: 'lolcat', description: 'cats who lol'}];
      expect(gotCart(product)).to.be.deep.equal({
        type: 'GOT_CART',
        cart: product
      });
    });
  })
})
