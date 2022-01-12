import request from 'supertest'
import app from './app'

describe('Testing root route', () => {
  it('should return a status code 200 and a json correct', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(typeof res.body).toBe('object')
        expect(res.body.success).toBe(true)
        expect(res.body.message).toBe('Server is online')

        return done()
      })
  })
})
