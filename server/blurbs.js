'use strict'

const db = require('APP/db')
const Blurb = db.model('blurbs')

module.exports = require('express').Router()
    .post('/',
    (req, res, next) =>
        Blurb.create(req.body)
            .then(blurb => res.status(201).json(blurb))
            .catch(next)
    )
    .put('/:id',
    (req, res, next) =>
        Blurb.update(req.body, {
          returning: true,
          where: {id: req.params.id}
        })
        .then(([_, [updatedBlurb]]) => res.status(201).json(updatedBlurb))
        .catch(next)
    )
