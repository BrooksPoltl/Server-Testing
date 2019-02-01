
const db = require('../data/dbConfig')

module.exports = {
  insert,
  remove,
};

async function insert (user) {
  const [id] = await db ('users').insert (user);
  return db ('users').where ({id}).first ();
}

function remove (id) {
   return db('users').where({id:2}).del()
}
