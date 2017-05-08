const request = require('supertest')
    , { expect, describe } = require('chai')
    , db = require('APP/db')
    , app = require('./start')

/* global describe it before afterEach */

describe('/api/projects', () => {
  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () =>
    it('returns all project titles', () =>
      request(app)
      .get('/api/projects')
      .then(res => expect(res.body).to.have.lengthOf(3))
    )
  )
})
