'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('projects', {
  title: STRING
})

module.exports.associations = (Project, {User, Container}) => {
  Project.belongsTo(User)
  Project.hasMany(Container)
}
