'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('projects', {
  title: STRING
})

module.exports.associations = (Project, {User}) => {
  Project.belongsTo(User)
}
