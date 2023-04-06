const request = require('supertest')
const server = require('./server')

describe('Test the root path', () => {
  it('It should response the GET method', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
  })
})