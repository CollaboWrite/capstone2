import axios from 'axios'

const reducer = (state=null, action) => {
  switch (action.type) {
  case STOCK_CONTAINER:
    return action.container
  }
  return state
}

const STOCK_CONTAINER = 'STOCK_CONTAINER'
export const stockContainer = container => ({
  type: STOCK_CONTAINER, container
})

export const createContainer = (container) =>
  dispatch =>
    axios.post('/api/containers/', container)
      .then((container) => dispatch(stockContainer(container.data)))
      .catch(err => console.error(err))

export const updateContainer = (container) =>
  dispatch =>
    axios.put(`/api/containers/${container.id}`, container)
      .then((container) => dispatch(stockContainer(container.data)))
      .catch(err => console.error(err))

export default reducer
