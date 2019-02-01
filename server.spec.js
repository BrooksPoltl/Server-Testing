const request = require('supertest')
const db = require('./data/dbConfig')
const users = require('./users/users')
describe('users', ()=>{
    it('should insert a user', async ()=>{
        let rows = await users.insert({username: 'hellasasdd', password: '1234'})
        const user = await db('users')
        expect (user).toHaveLength(1)
    })
})