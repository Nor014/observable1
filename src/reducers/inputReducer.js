const initState = {
  items: [],
  loading: false,
  error: null,
  search: ''
}

export default function inputReducer(state = initState, action) {
  if (action.type === 'CHANGE_SEARCH_FIELD') {
    return { ...state, search: action.payload }
  }

  if (action.type === 'START_AJAX_REQUEST') {
    return { ...state, loading: true, error: null }
  }

  if (action.type === 'AJAX_SUCSESS') {
    return { ...state, loading: false, items: action.payload, error: null }
  }

  if (action.type === 'AJAX_ERROR') {
    return { ...state, loading: false, error: action.payload }
  }

  if (action.type === 'RETURN_INIT_STATE') {
    return initState
  }

  return state
}