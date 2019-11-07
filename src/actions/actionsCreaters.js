export function changeSearchField(value) {
  return {
    type: 'CHANGE_SEARCH_FIELD',
    payload: value
  }
}

export function startAjaxRequest(value) {
  return {
    type: 'START_AJAX_REQUEST',
    payload: value
  }
}

export function sucsessAjaxRequest(data) {
  return {
    type: 'AJAX_SUCSESS',
    payload: data
  }
}

export function errorAjaxRequest(error) {
  return {
    type: 'AJAX_ERROR',
    payload: error
  }
}

export function returnInitState() {
  return {
    type: 'RETURN_INIT_STATE'
  }
}