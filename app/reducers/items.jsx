import axios from 'axios'

const initialState = {
    list: [],
    selected: {}
}

const reducer = (state = null, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case STOCK_ITEMS:
      newState.list = action.items
      break
    case STOCK_ITEM:
      newState.selected = action.item
      break
  }
  return newState
}

const STOCK_ITEMS = 'STOCK_ITEMS'
export const stockItems = items => ({
  type: STOCK_ITEM, items
})

const STOCK_ITEM = 'STOCK_ITEM'
export const stockItem = item => ({
  type: STOCK_ITEM, item
})

export const selectItem = (itemId) =>
    dispatch =>
        axios.get(`/api/items/${itemId}`)
            .then(item => dispatch(stockItem(item.data)))
            .catch(err => console.error(err))

// Continue refactoring ;D
// export const createItem = (item) =>
//   dispatch =>
//     axios.post('/api/items/', item)
//       .then((item) => dispatch(stockItems(item.data)))
//       .catch(err => console.error(err))

// export const updateitem = (item) =>
//   dispatch =>
//     axios.put(`/api/items/${item.id}`, item)
//       .then((item) => dispatch(stockItems(item.data)))
//       .catch(err => console.error(err))

export default reducer
