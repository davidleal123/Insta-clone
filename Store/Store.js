import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

const reducerPrueba = (state = [], action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state, 1];
        default:
            return state;
    }
};

// f(g(h(...args)))
const miMiddleware = store => next => (action) => {
    console.log('se ejecuta el middle');
    next(action);
};


const reducers = combineReducers({
    reducerPrueba,
    form,
});
const store = createStore(reducers, applyMiddleware(miMiddleware));

export default store;
