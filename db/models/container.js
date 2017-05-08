'use strict'

const {TEXT, STRING, ENUM, ARRAY} = require('sequelize')

module.exports = db => db.define('containers', {
  title: STRING,
  summary: STRING,
  label: ARRAY(STRING),
  status: {
    type: ENUM('To Do', 'First Draft', 'Revised Draft', 'Final Draft'),
    defaultValue: 'To Do'
  },
  text: TEXT,
  notes: TEXT,
  resources: ARRAY(STRING)
})

module.exports.associations = (Container, {Project, Blurb}) => {
  Container.belongsTo(Project)
  Container.belongsTo(Container, {as: 'ParentContainer'})
  Container.hasMany(Blurb)
}
