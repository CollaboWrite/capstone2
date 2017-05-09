'use strict'

const db = require('APP/db')
const Project = db.model('projects')
const Item = db.model('items')

module.exports = require('express').Router()
  // fetches all projects for drop down
  .get('/', (req, res, next) =>
    Project.findAll()
    .then(projects => {
      res.send(projects)
    })
    .catch(next)
  )
  // fetches the selected project and its first level of items
  // in order to fetch nested items within item, look into NPM sequelize-hierarchy
  .get('/:projectId', (req, res, next) =>
    Project.findOne({
      where: {
        id: req.params.projectId
      },
      include: [{model: Item}]
    })
    .then(project => res.send(project))
    .catch(next)
  )
  .post('/', (req, res, next) => {
    Project.create(req.body)
    .then(project => {
      res.send(project)
    })
    .catch(next)
  })
