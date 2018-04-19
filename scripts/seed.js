#!/usr/bin/env node

const {db, User, Product, Category, Review, Order} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'grace@hopper.com', password: '123'}),
    Review.create({text: 'this is a real review'}),
    Category.create({})
  ])
  console.log(`seeded ${users.length} users`)
  console.log('email: ', users[0].email, ' password: 123')
  console.log('email: ', users[1].email, ' password: 123')
  console.log(`seeded successfully`)

  for (let i = 0; i < 100; i++) {
    await Product.create({
      title: `GameTest${i}`,
      description: `Good game #${i}`,
    });
  }
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
