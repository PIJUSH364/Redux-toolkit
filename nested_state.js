const produce = require('immer').produce;

const initiaState = {
  name: 'pijush',
  address: {
    street: '123 main st',
    city: 'joynager',
    state: 'west bengal',
  },
};

// dispatch type
const STREET_UPDATED = 'STREET_UPDATED';

const updatedStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //todo old way update state

      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      //todo new way update state
      //   produce take two argument
      //   first argument current state,2nd arrow function
      //   arrow function take a argument  "draft"
      //   "draft" target sepefic action

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

// ......
const redux = require('redux');
const createStore = redux.createStore;
const store = redux.createStore(reducer);

const unSubscribe = store.subscribe(() =>
  console.log('nested_state_updated', store.getState())
);

store.dispatch(updatedStreet('halder_m_street'));
unSubscribe();
