import thunk from 'react-thunk';
import {createStore, compose, applyMiddleware} from 'redux';

const store = createStore(
    reducer, 
    compose ( applyMiddleware (thunk), window.devToolsExtension ? window.devToolsExtension() : f => f ));

export {store};