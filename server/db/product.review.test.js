/* eslint-env mocha,chai */

const {expect} = require('chai')
const {db, Product} = require('./index')

describe('Product model testerinos + 1', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('data validations', () => {
    describe('title checkeroo', () => {
      let gamerino

      beforeEach(async () => {
        gamerino = await Product.create({
          title: 'Test Game Alpha',
          description: 'Detailed descriptch bro'
        })
      })

      it('has a title', () => {
        expect(gamerino.title).to.equal('Test Game Alpha')
      })

      it('has a description', () => {
        expect(gamerino.description).to.equal('Detailed descriptch bro')
      })
    }) // end describe('data validation')
  }) // end describe('titlecheckerino')
}) // end describe('User model')
