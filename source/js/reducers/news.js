import { GET_NEWS } from '../actions/news'

const initialNewsState = {
  news_item: {},
  initialValues: {
    id: 'NAVI',
    country: 'Ukraine',
  },
}

const News = (state = initialNewsState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news_item: action.news_item,
      }
    default:
      return state
  }
}

export default News
