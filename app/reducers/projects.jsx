import axios from 'axios'
const initialState = {
    list: [],
    selected: {}
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

export const fetchProjects = () =>
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
