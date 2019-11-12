import request from 'supertest'
import expressApp from '../createApp'

describe('circleci backend', () => {
  it('should return 200 OK', async () => {
    const response = await request(expressApp)
      .get('/data')
      .expect(200)
    expect(response.body.data.length).toBe(3)
  })
})
