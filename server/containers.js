'use strict'

const db = require('APP/db')
const Container = db.model('containers')

module.exports = require('express').Router()
    .post('/',
    (req, res, next) =>
        Container.create(req.body)
            .then(container => res.status(201).json(container))
            .catch(next)
    )
    .put('/:id',
    (req, res, next) =>
        Container.update(req.body, {
          returning: true,
          where: {id: req.params.id}
        })
        .then(([_, [updatedContainer]]) => res.status(201).json(updatedContainer))
        .catch(next)
    )
