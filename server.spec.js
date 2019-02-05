const request = require('supertest')
const db = require('./data/dbConfig')
const users = require('./users/users')
const server = require('./server')
afterEach(async () => {
    await db('users').truncate();
});
describe('adds users', ()=>{
    it('should insert a user', async ()=>{
        let rows = await users.insert({username: 'Brooks', password: '1234'})
        const user = await db('users')
        expect (user).toHaveLength(1)
        expect(rows.username).toEqual('Brooks')
    })

})
describe('deletes users', () => {
    it('should delete a user', async() => {
        let response = await request(server).delete( `/api/users/1` )
        expect(response.status).toBe(200)
    })

})