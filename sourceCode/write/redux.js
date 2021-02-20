const createStore = function (reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }
  /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
  };
};
/*counterReducer, 一个子reducer*/
/*注意：counterReducer 接收的 state 是 state.counter*/
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
/*InfoReducer，一个子reducer*/
/*注意：InfoReducer 接收的 state 是 state.info*/
function InfoReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
}

function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  return function combination(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    console.log(nextState);
    return nextState;
  };
}
const reducer = combineReducers({
  counter: counterReducer,
  info: InfoReducer,
});

let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: "前端九部",
    description: "我们都是前端爱好者！",
  },
};

const store = createStore(reducer, initState);
const next = store.dispatch;

/*重写了store.dispatch*/
store.dispatch = (action) => {
  console.log("this state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
};
store.dispatch({
  type: "INCREMENT",
});
