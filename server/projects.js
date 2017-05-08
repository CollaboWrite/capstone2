'use strict'

const db = require('APP/db')
const Project = db.model('projects')

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Project.findAll()
    .then(projects => res.send(projects))
    .catch(next)
  )
