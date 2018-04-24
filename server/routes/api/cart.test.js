'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app');
const agent = request.agent(app);
const {db, Product} = require('../../db');

describe('Cart API Route', function () {
  beforeEach(async () => {
    await db.sync({force: true});
  });

  describe('GET initial /api/cart', () => {
    it('returns a 200 response status... lol', () => {
      return agent
        .get('/cart')
        .expect(200);
    });
  });
});
