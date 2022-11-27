# Alloew access to state via getState()

# Alloew state to be updated via dispatch(action)

# Resiter listener subscribe(listener)

##for nested state updated

```
  npm i immer
```

after that imporet produce method

```
  const produce = require('immer').produce;
```

```
produce take two argument
first argument current state,2nd arrow function
arrow function take a argument "draft"
```

##Authrenction check

```
    const applyMiddleWare = redux.applyMiddleware;
```

// redux_logger setUp step

```
    npm i redux-logger
```

```
  const reduxLogger = require('redux-logger');
```

```
 const logger = reduxLogger.createLogger();
```

##middleWare setup on store

```
    const store = createStore(rootReducer, applyMiddleWare(logger));
```

n.b:we can pass as many as middleWare on createStore method

##unsubcribe method updated

```
    const unSubscribe = store.subscribe(() => {});
```

#lac15 Async action

state={
loading:true,
data:[],
erroe:``,
}

loading :: display a loading spinner in your component
data :: list of users
error :: display error to thr user

n.b:list of data fetching by api

# Async action creator

\*\*\*redux-thank basicaly support or define asyn action creators easy way

```
    npm i redux-thunk
```

\*\*create a middleWare redux-thunk

```
    const applyMiddleWare = redux.applyMiddleware;
```

```
    const thunkMiddleWare = require('redux-thunk').default;
```

at last middleWare apply on store

```
    const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
```

##Axios setUp

```
    const axios = require('axios');
```
