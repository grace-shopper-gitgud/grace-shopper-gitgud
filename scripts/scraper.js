const axios = require('axios');
const fs = require('fs');
let gameArr = [];

const fetch = async () => {
  for (let j = 0; j < 1; j++) {
    for (let i = 0; i < 10; i++) {
      let random = Math.round(Math.random() * 5000);
      let req = {
        method: 'GET',
        url: `${random}`,
        baseURL: 'https://api-2445582011268.apicast.io/games/',
        headers: {
          'Accept': 'application/json',
          'user-key': '0809834d03869c877237eaa598676482'
        }
      }
        gameArr.push(axios.request(req));
    }
  }

  await Promise.all(gameArr)
    .then(res => {
      return res.map(elem => elem.data);
    })
    .then(games => {
      let resolvedGames = [];
      games.forEach(game => {
        let [gameSpread] = game;
        if (gameSpread.name) {
          let infoIWant = {
            title: gameSpread.name,
            description: gameSpread.summary,
            imageUrl: gameSpread.cover.url,
          }
          console.log(infoIWant);
          resolvedGames.push(infoIWant);
        }
      });
      fs.appendFileSync('games.json', JSON.stringify(resolvedGames));
    })
    .catch(err => 'Oops!');
}

fetch();

