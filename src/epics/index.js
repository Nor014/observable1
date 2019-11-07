import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, catchError, retry } from 'rxjs/operators';
import { startAjaxRequest, sucsessAjaxRequest, errorAjaxRequest, returnInitState } from '../actions/actionsCreaters'

export const changeSearchEpic = (action$) => action$.pipe(
  debounceTime(100),
  ofType('CHANGE_SEARCH_FIELD'),
  map(action => action.payload.trim()),
  map(data => startAjaxRequest(data))
)

export const ajaxRequestEpic = (action$) => action$.pipe(
  debounceTime(100),
  ofType('START_AJAX_REQUEST'),
  map(action => action.payload),
  switchMap(data => {
    if (data !== '') {
      return ajax.getJSON(`http://localhost:7070/api/search?${new URLSearchParams({ q: data })}`).pipe(
        retry(2),
        map(data => sucsessAjaxRequest(data)),
        catchError(error => of(errorAjaxRequest(error.message)))
      )
    } else {
      return of(returnInitState())
    }
  })
)




