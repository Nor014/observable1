import inputReducers from '../reducers/inputReducer'
import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic, ajaxRequestEpic } from '../epics/index';

const reducer = combineReducers({ skillsStore: inputReducers });

const epic = combineEpics(changeSearchEpic, ajaxRequestEpic);

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(epic);

export default store;

