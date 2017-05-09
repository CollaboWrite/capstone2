'use strict'

const db = require('APP/db')
const Item = db.model('items')

module.exports = require('express').Router()
    .post('/',
        (req, res, next) =>
        Item.create(req.body)
        .then(item => res.status(201).json(item))
        .catch(next)
    )
    .put('/:id',
        (req, res, next) =>
        Item.update(req.body, {
            returning: true,
            where: { id: req.params.id }
        })
        .then(([_, [updatedItem]]) => res.status(201).json(updatedItem))
        .catch(next)
    )
    .get('/:id',
        (req, res, next) =>
        Item.findById(req.params.id)
        .then(item => res.send(item))
        .catch(next))
