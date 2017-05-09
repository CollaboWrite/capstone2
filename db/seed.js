'use strict'

const db = require('APP/db'),
    { User, Project, Item, Promise } = db,
    { mapValues } = require('lodash')

function seedEverything() {
    const seeded = {
        users: users(),
    }

    seeded.projects = projects(seeded)
    seeded.items = items(seeded)
    seeded.nestedItems = nestedItems(seeded)

    return Promise.props(seeded)
}

const users = seed(User, {
    god: {
        email: 'god@example.com',
        name: 'So many names',
        password: '1234',
    },
    barack: {
        name: 'Barack Obama',
        email: 'barack@example.gov',
        password: '1234'
    },
})

const projects = seed(Project, ({ users }) => ({
    novel: { title: 'My First Novel', user_id: users.god.id },
    thesis: { title: 'Graduate Thesis', user_id: users.god.id }
}))

const items = seed(Item, ({ projects }) => ({
    chapter1: { title: 'Chapter 1', summary: 'There was once a very hot day', label: ['thing 1', 'thing 2', 'thing 3'], status: 'First Draft', text: 'Something happens in chapter 1', notes: 'Things happen during this chapter', resources: ['google', 'wikipedia', 'bing'], project_id: projects.novel.id, type: 'folder' },
    chapter2: { title: 'Chapter 2', summary: 'There was once a wet day', label: ['object 1', 'object 2', 'object 3'], status: 'First Draft', text: 'Something happens in chapter 2', notes: 'Things dont happen during this chapter', resources: ['new york times'], project_id: projects.novel.id, type: 'folder' }
}))

const nestedItems = seed(Item, ({ items }) => ({
    scene: { title: 'Early Morning', summary: 'There was a morning and there was an ocean', label: ['water'], status: 'To Do', text: 'Something and something and waves and it sucks', notes: 'Surfing is the worst', resources: ['surfing.com'], parent_item_id: items.chapter1.id, type: 'blurb'},
    scene2: { title: 'Mid Afternoon', summary: 'We went to eat some pizza', label: ['food', 'pizza'], status: 'To Do', text: 'Pizza is delicious', notes: 'Yumm', resources: ['ChuckeeCheese.com'], parent_item_id: items.chapter1.id, type: 'blurb'},
    night: { title: 'Nighttime', summary: 'Naps', label: ['sleeping'], status: 'To Do', text: 'I was tired so I took a nap', notes: 'Cuddling with my cat', resources: ['netflix.com'], parent_item_id: items.chapter2.id, type: 'blurb'},
    midnight: { title: 'Midnight', summary: 'Late at night I wanted a snack', label: ['snacktime', 'midnight snack'], status: 'To Do', text: 'I was hungry and remembered I had icecream in the freezer. Yum, I like ice cream but now I have a sugar rush.', notes: 'Ice cream is the best', resources: ['benandjerries.com'], parent_item_id: items.chapter2.id, type: 'blurb'}
}))

if (module === require.main) {
    db.didSync
        .then(() => db.sync({ force: true }))
        .then(seedEverything)
        .finally(() => process.exit(0))
}

class BadRow extends Error {
    constructor(key, row, error) {
        super(error)
        this.cause = error
        this.row = row
        this.key = key
    }

    toString() {
        return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
    }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
    return (others = {}) => {
        if (typeof rows === 'function') {
            rows = Promise.props(
                mapValues(others,
                    other =>
                    // Is other a function? If so, call it. Otherwise, leave it alone.
                    typeof other === 'function' ? other() : other)
            ).then(rows)
        }

        return Promise.resolve(rows)
            .then(rows => Promise.props(
                Object.keys(rows)
                .map(key => {
                    const row = rows[key]
                    return {
                        key,
                        value: Promise.props(row)
                            .then(row => Model.create(row)
                                .catch(error => { throw new BadRow(key, row, error) })
                            )
                    }
                }).reduce(
                    (all, one) => Object.assign({}, all, {
                        [one.key]: one.value
                    }), {}
                )
            ))
            .then(seeded => {
                console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
                return seeded
            }).catch(error => {
                console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
            })
    }
}

module.exports = Object.assign(seed, { users, projects, items })