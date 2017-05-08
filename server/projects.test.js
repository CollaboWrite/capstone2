const request = require('supertest')
  , { expect } = require('chai')
  , Promise = require('bluebird')
  , db = require('APP/db')
  , app = require('./start')

const Project = db.model('projects')
const Container = db.model('containers')
const Blurb = db.model('blurbs')

/* global describe it before afterEach, beforeEach */

describe('/api/projects', () => {
  var createdEntries = {}
  before('Await database sync', () => db.didSync)
  beforeEach('Add projects to db', () => {
    return Promise.all(
      [
        Project.bulkCreate([
        { title: 'ProjectOne' },
        { title: 'ProjectTwo' }
        ], {returning: true}),
        Container.bulkCreate([
        { title: 'ContainerOne' },
        { title: 'ContainerTwo' }
        ], {returning: true}),
        Blurb.bulkCreate([
        { title: 'BlurbOne' },
        { title: 'BlurbTwo' }
        ], {returning: true})
      ]
    ).spread((projects, containers, blurbs) => {
      blurbs.forEach((blurb, indx) => {
        blurb.setContainer(containers[indx])
        createdEntries[blurb.title] = blurb
      })
      containers.forEach((container, indx) => {
        container.setProject(projects[indx])
        createdEntries[container.title] = container
      })
      projects.forEach((project) => {
        createdEntries[project.title] = project
      })
    })
  })

  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () =>
    it('returns all project titles', () =>
      request(app)
        .get('/api/projects')
        .then(res => {
          expect(res.body).to.have.lengthOf(2)
        })
    )
  )

  describe('GET /:projectId', () => {
    it('returns the project', () =>
      request(app)
        .get('/api/projects/' + createdEntries.ProjectOne.id)
        .then(res => {
          expect(res.body.title).to.equal('ProjectOne')
          expect(res.body.containers[0].title).to.equal('ContainerOne')
          expect(res.body.containers[0].blurbs[0].title).to.equal('BlurbOne')
        })
    )
  })
})
