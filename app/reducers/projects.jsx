import axios from 'axios'
const initialState = {
    list: [],
    selected: {},
    item: {}
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case STOCK_PROJECTS:
            newState.list = action.projects
            break
        case STOCK_PROJECT:
            newState.selected = action.project
            break
        case STOCK_ITEM:
            newState.item = action.item
            break
    }

    return newState
}

const STOCK_PROJECTS = 'STOCK_PROJECTS'
export const stockProjects = projects => ({
    type: STOCK_PROJECTS, projects
})

const STOCK_PROJECT = 'STOCK_PROJECT'
export const stockProject = project => ({
    type: STOCK_PROJECT, project 
})

const STOCK_ITEM = 'STOCK_ITEM'
export const stockItem = item => ({
    type: STOCK_ITEM, item
})

export const selectItem = (itemId) =>
    dispatch =>
        axios.get(`/api/containers/${itemId}`)
            .then(item => dispatch(stockItem(item.data)))
            .catch(err => console.error(err))

export const fetchProjects = (projects) =>
    dispatch =>
        axios.get('/api/projects/')
            .then((projects) => dispatch(stockProjects(projects.data)))
            .catch(err => console.error(err))

export const fetchProject = (projectId) =>
    dispatch =>
        axios.get('/api/projects/' + projectId)
            .then((project) => dispatch(stockProject(project.data)))
            .catch(err => console.error(err))

export const createProjects = (project) =>
    dispatch =>
        axios.post('/api/projects/', project)
            .then((projects) => dispatch(stockProjects(projects.data)))
            .catch(err => console.error(err))

export default reducer
