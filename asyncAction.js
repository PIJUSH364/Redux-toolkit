const redux = require('redux');
const createStore = redux.createStore;
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const produce = require('immer').produce;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    paylod: users,
  };
};
const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    paylod: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USERS_SUCCEEDED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = action.paylod;
        draft.error = '';
      });
    case FETCH_USERS_FAILED:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = [];
        draft.error = action.paylod;
      });
    //   draft.address.street = action.payload;
    default:
      break;
  }
};

// action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
        console.log(response);
      })
      .catch(function (error) {
        dispatch(fetchUsersFailed(error.message));
        console.log(error);
      });
  };
};

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));

// store.subscribe(() => console.log('subScribe', store.getState()));
// store.dispatch(fetchUsers());

function dataFetch() {
  console.log('data featching');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // response.data is the users

      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

dataFetch();
