/* eslint-env mocha,chai */
const {expect} = require('chai')
const {db, Review, Product, User} = require('./index')

describe('Review model tests', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
    let testReview;
    let testProduct;
    let testUser;

    beforeEach(async () => {
        
        testProduct = await Product.create({
            title: 'test review',
            description: 'test desc'
        })
        
        testUser = await User.create({
            email: 'test@email.com',
            password: 'test password'
        })
        
        testReview = await Review.create({
            text: 'test review',
            productId: 1,
            userId: 1,
            reviews_productId_fkey: 1
        })

    })

    it('Instance has a text property', () => {
        expect(testReview.text).to.equal('test review');
    })

    it('Instance has a productId property', () => {
        expect(testReview.productId).to.equal(1);
    })

    it('Instance has a userId property', () => {
        expect(testReview.userId).to.equal(1);
    })

})
