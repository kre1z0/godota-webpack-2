import { combineReducers } from 'redux'
// ➡ https://github.com/reactjs/react-router-redux
import { routerReducer } from 'react-router-redux'
// ➡ https://redux-form.com/6.4.1/docs/GettingStarted.md/
import { reducer as formReducer } from 'redux-form'
import Video from './video'
import Youtube from './youtube'
import Twitch from './twitch'
import News from './news'

const rootReducer = combineReducers({
  Video,
  Youtube,
  Twitch,
  News,
  routing: routerReducer,
  form: formReducer,
})

export default rootReducer
