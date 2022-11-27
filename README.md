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
