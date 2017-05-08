'use strict'

const db = require('APP/db')
const Project = db.model('projects')
const Container = db.model('containers')
const Blurb = db.model('blurbs')


module.exports = require('express').Router()
  // fetches all projects for drop down
  .get('/', (req, res, next) =>
    Project.findAll()
    .then(projects => {
      res.send(projects)
    })
    .catch(next)
  )
  // fetches all containers/blurbs for the selected project
  .get('/:projectId', (req, res, next) =>
    Project.findOne({
      where: {
        id: req.params.projectId
      },
      include: [{
        model: Container,
        include: [{
          model: Blurb
        }]
      }]
    })
    .then(project => res.send(project))
    .catch(next)
  )
