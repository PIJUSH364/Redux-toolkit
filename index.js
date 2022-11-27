const redux = require('redux');
const createStore = redux.createStore;
const combineResucer = redux.combineReducers;
// optinal way dispatch
const bindActionCreator = redux.bindActionCreators;

// middleWare set up
const applyMiddleWare = redux.applyMiddleware;

// redux_logger setUp
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERD = 'CAKE_ORDERD';
const CAKE_RESTOKED = 'CAKE_RESTOKED';

const ICECREAM_ORDERD = 'ICECREAM_ORDERD';
const ICECREAM_RESTOKED = 'ICECREAM_RESTOKED';

// ! action type
function orderCake() {
  return {
    type: CAKE_ORDERD,
    paylod: 1,
  };
}
function restokedCake(qty = 1) {
  return {
    type: CAKE_RESTOKED,
    paylod: qty,
  };
}

function orderIceCream() {
  return {
    type: ICECREAM_ORDERD,
    paylod: 1,
  };
}
function restokedIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOKED,
    paylod: qty,
  };
}
const intialCakeState = {
  numOfCakes: 10,
};
const intialIceCreamState = {
  numOfIceCreams: 8,
};

// (pervState,action)=>newState
// ? mutiple useReducer use

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERD:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.paylod,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = intialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERD:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.paylod,
      };
    default:
      return state;
  }
};

// combine multiiple reducer
const rootReducer = combineResucer({
  cake: cakeReducer,
  iceCrem: iceCreamReducer,
});

//* all state value in that store
const store = createStore(rootReducer, applyMiddleWare(logger));

console.log('Initial store', store.getState());

const unSubscribe = store.subscribe(() => {});

{
  // store.dispatch(orderCake());
  // store.dispatch(orderCake());
  // store.dispatch(orderCake());
  // store.dispatch(restokedCake(3));
  // unSubscribe();
  // console.log('after dispatch three times', store.getState());
}

//* this are similar to above dispatch method

const actions = bindActionCreator(
  { orderCake, restokedCake, orderIceCream, restokedIceCream },
  store.dispatch
);

//* cake dispatch
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restokedCake(35);

//* icecream dispatch
actions.orderIceCream();
actions.restokedIceCream(5);
