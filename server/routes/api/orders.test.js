/* eslint-env mocha,chai */

const {expect} = require('chai');
const request = require('supertest');
const {db, Order, User, Product} = require('../../db');
const app = require('../../app');

describe('Order routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
    await User.create({email: 'tyler@test.com', password: 'butt'})
  })

  describe('/api/orders/:userId', () => {
    const order1 = {status: 'COMPLETED', email: 'tyler@test.com', street: '123 Lunch Lane', state: 'MA', zipcode: '01140', total: 45, userId: 1}
    const order2 = {status: 'PROCESSING', email: 'dont@fail.com', street: '79 Triforce Drive', state: 'HY', zipcode: '12345', total: 55, userId: 1}
    const game1 = {title: 'Breath of the Wild', description: "I'm addicted to this stupid game"}
    const game2 = {title: 'Mario Party', description: "fun times ahead"}
  
    beforeEach(async () => {
      const order = await Order.create(order1)
      await Order.create(order2)
      order.addProduct(await Product.create(game1));
      order.addProduct(await Product.create(game2));
    })

    it('GET /api/orders/:userId', async () => {
      await request(app)
        .get('/api/orders/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.be.equal(2)
          expect(res.body[0].email).to.be.equal('tyler@test.com')
        })
    })

    it('GET eager loads products in order', async () => {
      await request(app)
        .get('/api/orders/1')
        .expect(200)
        .then(res => {
          expect(res.body[0].products).to.be.an('array')
          expect(res.body[0].products[0].title).to.be.equal('Breath of the Wild')
          expect(res.body[0].products[1].description).to.be.equal('fun times ahead')
        })
    })
  }) // end describe('/api/orders/userId')
}) // end describe('Order routes')