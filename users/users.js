
const db = require('../data/dbConfig')

module.exports = {
    insert,
    update
}


async function insert (user) {
  const [id] = await db ('users').insert (user);
  return db ('users').where ({id}).first ();
}

async function update (id, changes) {
  return null;
}
