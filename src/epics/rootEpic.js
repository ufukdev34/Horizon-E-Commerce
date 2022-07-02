import { combineEpics } from 'redux-observable'
import cartEpic from './cartEpic'
import categoryEpic from './categoryEpic'

export default combineEpics(cartEpic,categoryEpic)