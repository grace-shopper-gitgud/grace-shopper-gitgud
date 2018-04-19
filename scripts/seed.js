
const {db, User, Product, Category} = require('../server/db')
const gameInfo = require('./games');

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

  // for (let i = 0; i < 100; i++) {
  //   await Product.create({
  //     title: `GameTest${i}`,
  //     description: `Good game #${i}`,
  //   });
  // }

  const gamePromises = gameInfo.map(game => {

    if (!game.description) game.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.

    Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.`;

    let price = (Math.random() * 50).toFixed(2);
    let quantity = Math.round(Math.random() * 100);
    let imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.imageUrl.slice(44)}`;

    return Product.create({
      title: game.title,
      description: game.description,
      imageURL,
      price,
      quantity
    });
  });

  const games = await Promise.all(gamePromises);

  console.log(`seeded games`);
  console.log(`seeded successfully`);
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
