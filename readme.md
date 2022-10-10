## How To UseAdd the Redux Toolkit and React-Redux packages to your project:

```sh
npm install @reduxjs/toolkit react-redux
```

## Create a Redux Store

## Create a file named src/store/store.js.

Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```sh
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

## Provide the Redux Store to React main.jsx

```sh
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Create a Redux State Slice

Add a new file named src/store/slices/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.

```sh
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {

      state.counter += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

 //export default counterSlice.reducer;

```

## Create a file index.ja in the counter folder and export \* from "./counterSlice"

import accions from counterSlice.js. - example increment and .reducer

```sh

export * from "./counterSlice";

```

## Add Slice Reducers to the Store

```sh
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
```

## Use Redux State and Actions in React Components
Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.