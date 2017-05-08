import axios from 'axios'

const reducer = (state=null, action) => {
  switch (action.type) {
  case STOCK_BLURB:
    return action.blurb
  }
  return state
}

const STOCK_BLURB = 'STOCK_BLURB'
export const stockBlurb = blurb => ({
  type: STOCK_BLURB, blurb
})

export const createBlurb = (blurb) =>
  dispatch =>
    axios.post('/api/blurbs/', blurb)
      .then((blurb) => dispatch(stockBlurb(blurb.data)))
      .catch(err => console.error(err))

export const updateBlurb = (blurb) =>
  dispatch =>
    axios.put(`/api/blurbs/${blurb.id}`, blurb)
      .then((blurb) => dispatch(stockBlurb(blurb.data)))
      .catch(err => console.error(err))

export default reducer
