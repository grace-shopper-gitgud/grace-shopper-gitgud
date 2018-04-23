/* eslint-env mocha,chai */

const {expect} = require('chai')
const {db, Review} = require('./index')


describe('Review model', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

  describe('attributes definition', () => {
    describe('correctPassword', () => {
      let review;

      beforeEach(async () => {
        review = await Review.create({
          text: 'This is a test review'
        })
      })

      it('requires `text`', () => {
        review.content = '';
        return review.validate()
        .then(() => {
          throw new Error('validation should fail when content is null');
        },
        (result) => {
          expect(result).to.be.an.instanceOf(Error);
        });
      });
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
