'use strict'

// potentially bring in npm sequelize-hierarchy here
const {TEXT, STRING, ENUM, ARRAY} = require('sequelize')

module.exports = db => db.define('items', {
  title: STRING,
  summary: STRING,
  label: ARRAY(STRING),
  status: {
    type: ENUM('To Do', 'First Draft', 'Revised Draft', 'Final Draft'),
    defaultValue: 'To Do'
  },
  text: TEXT,
  notes: TEXT,
  resources: ARRAY(STRING),
  type: ENUM('folder', 'blurb')
})

module.exports.associations = (Item, {Project}) => {
  Item.belongsTo(Project)
  Item.belongsTo(Item, {as: 'ParentItem'})
}
