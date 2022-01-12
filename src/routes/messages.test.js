import request from 'supertest'
import { getPrevHash, saveData } from '../utils/logFile'
import app from './../app'

jest.mock('./../utils/logFile')

describe('Testing messages routes', () => {
  test('POST /messages should return bad request status', (done) => {
    request(app)
      .post('/api/messages')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.errors.length).toBe(1)
        expect(res.body.errors[0]).toEqual({ msg: 'Message is required', param: 'message', location: 'body' })
        return done()
      })
  })
  test('POST /messages should add a new message', (done) => {
    request(app)
      .post('/api/messages')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ message: 'This is testing' })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(typeof res.body).toBe('object')
        expect(res.body.success).toBe(true)
        expect(saveData).toHaveBeenCalled()
        expect(getPrevHash).toHaveBeenCalled()
        return done()
      })
  })
})
